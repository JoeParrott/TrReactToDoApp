import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import Validation from './components/Validation';
import axios from 'axios';

function App() {

  const [todoItem, updateTodoItem] = useState([]);
  const [completedTasks, updateCompletedTasks] = useState([]);
  const [validationOpen, handleValidationOpen] = useState(false);
  const [continueClick, updateContinueClick] = useState(false);
  const [storedID, updateID] = useState();
  const [deleteWasClicked, updateDeleteClick] = useState(false);
  const [completeWasClicked, updateCompleteClick] = useState(false);

  useEffect(() => {
    axios.get('https://xl8kch1w99.execute-api.eu-west-1.amazonaws.com/dev/tasks')
      .then(response => {
        console.log('Success!', response);
        updateTodoItem(response.data);
      })
      .catch(err => {
        console.log('error', err)
      })
  }, []);

  const addNewTask = (title, descrip, date) => {
    const newTask = {
      Title: title,
      Description: descrip,
      DueDate: date,
      Completed: false
    };
    axios.post('https://xl8kch1w99.execute-api.eu-west-1.amazonaws.com/dev/tasks', newTask)
      .then(response => {
        console.log('task sent', response);
        const newTaskCopy = [...todoItem, newTask];
        updateTodoItem(newTaskCopy);
      })
      .catch(err => {
        console.log('error', err)
      })
  };

  const updateContClick = () => {
    updateContinueClick(true);
  }

  const updateClickedDelete = () => {
    updateDeleteClick(true);
  };

  const deleteTask = (id) => {
    if (deleteWasClicked === true && continueClick === true) {
      // setup delete here
      axios.delete(`https://xl8kch1w99.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`)
        .then(response => {
          console.log('successful deletion', response);
          const deletedTaskArray = todoItem.filter(todo => {
            return todo.TaskID !== id;
          });
          updateTodoItem(deletedTaskArray);
        })
        .catch(err => {
          console.log('API error', err)
        });
      updateDeleteClick(false);
      updateContinueClick(false);
    };
  };

  const updateClickedComplete = () => {
    //console.log("update click started...")
    updateCompleteClick(true);
    //console.log("update click ended...")

  };

  const completeTask = (id) => {
    console.log("**complete task started...")
    // console.log(completeWasClicked);
    // console.log(storedID);
    // console.log(continueClick)
    if (completeWasClicked === true && continueClick === true) {
      const completedKey = { Completed: true }
      axios.put(`https://xl8kch1w99.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`, completedKey)
        .then(response => {
          console.log('completed sent', response);
          const completedTask = todoItem.filter(todo => {
            return todo.TaskID === id
          });
          const completedCopy = [...completedTasks, completedTask];
          updateCompletedTasks(completedCopy)

          const taskArray = todoItem.filter(todo => {
            return todo.TaskID !== id;
          });
          updateTodoItem(taskArray);
          console.log(completedTasks);
          updateCompleteClick(false);
          updateContinueClick(false);
        })
        .catch(err => {
          console.log('error', err)
        });
    };
    //console.log("**complete task ended...")
  };

  const completedCount = () => {
    return completedTasks.length
  };

  const openValidatorModal = () => {
    handleValidationOpen(true)
    console.log()
  };

  const changeStoredID = (id) => {
    updateID(id);
  };

  return (
    <div>
      <header>
        <Header
          addNewTask={addNewTask}
        />
      </header>
      <main>
        {todoItem.map(todo => {
          return (
            <Tasks
              key={todo.TaskID}
              todoTitle={todo.Title}
              todoDescrip={todo.Description}
              todoCompleted={todo.Completed}
              todoDate={todo.DueDate}
              todoID={todo.TaskID}
              markComplete={completeTask}
              markDelete={deleteTask}
              validationOpen={validationOpen}
              handleValidationOpen={handleValidationOpen}
              openValidatorModal={openValidatorModal}
              setID={changeStoredID}
              clickedComp={updateClickedComplete}
              clickedDelete={updateClickedDelete}
            />)
        })};
        <Validation
          validationOpen={validationOpen}
          handleValidationOpen={handleValidationOpen}
          openValidatorModal={openValidatorModal}
          completeTask={completeTask}
          deleteTask={deleteTask}
          TaskID={storedID}
          updateContClick={updateContClick}
        />
      </main>
      <footer>
        <Footer
          completedCount={completedCount} />
      </footer>
    </div>
  );
}

export default App;