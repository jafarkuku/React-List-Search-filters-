import React, { Component } from 'react';

import DataList from './containers/DataList'
import SearchBar from './containers/SearchBar'
import SortButton from './containers/SortButton'
import logo from '../images/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-body-container">
          <div className="Search-area-container">
            <div className="Search-area">
              <SearchBar />
            </div>
            <div className="Sort-area">
              <SortButton />
            </div>
          </div>
          <DataList />
      </div>
    </div>
    );
  }
}

export default App;
