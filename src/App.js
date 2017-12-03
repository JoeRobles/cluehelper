import React, { Component } from 'react';
import './App.css';
import ClueHelper from './components/ClueHelper';

class App extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-fixed-top navbar-inverse">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">Cluedo Helper</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav"></ul>
          </div>
        </nav>
        <ClueHelper/>
      </div>
    );
  }
}

export default App;
