import React, { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';

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
    console.log(newTask);
  };

  const deleteTask = (id) => {
    const deletedTaskArray = todoItem.filter(todo => {
      return todo.id !== id;
    });
    updateTodoItem(deletedTaskArray);
  };

  const completeTask = (id) => {
    const completedTask = todoItem.filter(todo => {
      return todo.id === id
    })
    updateCompletedTasks(...completedTasks, completedTask)

    const taskArray = todoItem.filter(todo => {
      return todo.id !== id;
    });
    updateTodoItem(taskArray)
  };

  const completedCount = () => {
    return completedTasks.length
  }

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
            />)
        })};
      </main>
      <footer>
        <Footer
          completedCount={completedCount} />
      </footer>
    </div>
  );
}

export default App;