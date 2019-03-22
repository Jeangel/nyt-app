import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

import Routes from './routes/routes';

class App extends Component {
  render() {
    console.log(process.env);
    return (
      <Routes></Routes>
    );
  }
}

export default App;
