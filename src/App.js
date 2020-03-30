import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import AddTask from './components/AddTask';

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

  const addNewTask = (title, descrip, date) => {
    const newTask = {
      title: title,
      descrip: descrip,
      id: '',
      dueDate: date,
      completed: false
    };
    const newTaskCopy = [...todoItem, newTask];
    updateTodoItem(newTaskCopy);
  }

  return (
    <div>
      <header>
        <Header
        />
        <AddTask
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
              todoDate={todo.dueDate} />)
        })};
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;