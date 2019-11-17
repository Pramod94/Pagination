import React, { Component } from 'react';
import './App.css';
import Pagination from './Component/Pagination';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h3>Pagination</h3>
      <Pagination />
      </div>
    );
  }
}

export default App;
