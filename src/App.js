import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import AddTask from './components/AddTask';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      taskList: [],
      completedTasks: 0,
      tasksDoneToday: 0,
      newTask: '',
      newTaskDescrip: '',
      newTaskDue: '',
      newTaskObject: {
        task: '',
        descrip: '',
        datedue: ''
      }
    };
  };

  newTask(event) {
    this.setState({
      newTask: event.target.value
    });
    console.log(this.state.newTask)
  };

  newTaskDescrip(event) {
    this.setState({
      newTaskDescrip: event.target.value
    });
    console.log(this.state.newTaskDescrip)
  };

  newTaskDue(event) {
    this.setState({
      newTaskDue: event.target.value
    })
    console.log(this.state.newTaskDue)
  }

  formHide = () => {
    this.setState({
      formVisible: false
    });
  };

  formShow = () => {
    this.setState({
      formVisible: true
    });
  };

  render() {
    return (
      <div>
        <header>
          <Header
            formShow={this.formShow.bind(this)} />
          <AddTask
            newTask={this.newTask.bind(this)}
            newTaskDescrip={this.newTaskDescrip.bind(this)}
            newTaskDue={this.newTaskDue.bind(this)}
            show={this.state.formVisible}
          />
        </header>
        <main>
          <Tasks />
          <Tasks />
          <Tasks />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;