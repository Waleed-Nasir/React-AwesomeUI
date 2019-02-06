import React, { Component } from 'react';
import './App.css';
import Registry from './component/Register';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Registry} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
