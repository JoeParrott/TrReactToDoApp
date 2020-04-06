import React, { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import Validation from './components/Validation';

function App() {

  const [todoItem, updateTodoItem] = useState([
    {
      title: "Example title text",
      descrip: "Example description text",
      id: 1,
      dueDate: "2020.04.01",
      completed: false
    }
  ]);

  const [completedTasks, updateCompletedTasks] = useState([]);
  const [validationOpen, handleValidationOpen] = useState(false);
  const [continueClick, updateContinueClick] = useState(false);
  const [storedID, updateID] = useState();
  const [deleteWasClicked, updateDeleteClick] = useState(false);
  const [completeWasClicked, updateCompleteClick] = useState(false);

  const addNewTask = (title, descrip, date) => {
    const newTask = {
      title: title,
      descrip: descrip,
      id: uuid(),
      dueDate: date,
      completed: false
    };
    const newTaskCopy = [...todoItem, newTask];
    updateTodoItem(newTaskCopy);
  };

  const updateContClick = () => {
    updateContinueClick(true);
  }

  const updateClickedDelete = () => {
    updateDeleteClick(true);
  };

  const deleteTask = (id) => {
    if (deleteWasClicked === true && continueClick === true) {
      const deletedTaskArray = todoItem.filter(todo => {
        return todo.id !== id;
      });
      updateTodoItem(deletedTaskArray);
      updateDeleteClick(false);
      updateContinueClick(false);
    };
  };

  const updateClickedComplete = () => {
    updateCompleteClick(true);
  };

  const completeTask = (id) => {
    console.log(completeWasClicked);
    console.log(storedID);
    console.log(continueClick)
    if (completeWasClicked === true && continueClick === true) {
      const completedTask = todoItem.filter(todo => {
        return todo.id === id
      });
      const completedCopy = [...completedTasks, completedTask];
      updateCompletedTasks(completedCopy)

      const taskArray = todoItem.filter(todo => {
        return todo.id !== id;
      });
      updateTodoItem(taskArray);
      console.log(completedTasks);
      updateCompleteClick(false);
      updateContinueClick(false);
    };
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
              key={todo.id}
              todoTitle={todo.title}
              todoDescrip={todo.descrip}
              todoCompleted={todo.completed}
              todoDate={todo.dueDate}
              todoID={todo.id}
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
          taskID={storedID}
          completeClick={updateContClick}
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