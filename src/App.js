import React from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <body>
      <main>
        <Tasks />
        <Tasks />
        <Tasks />
      </main>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
