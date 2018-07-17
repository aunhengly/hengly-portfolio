import React, { Component } from 'react';
import './styles/App.css';
import CoverPage from './components/CoverPage';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CoverPage />
        <Header />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
