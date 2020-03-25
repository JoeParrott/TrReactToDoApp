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
      tasksDoneToday: 0
    };
  };

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
            show={this.state.formVisible}
            onHide={this.formHide.bind(this)} />
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