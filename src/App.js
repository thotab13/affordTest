import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrainListPage from './TrainListPage';
import SingleTrainPage from './SingleTrainPage';
import RegisterCompany from './RegisterCompany'; // Import the registration component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={TrainListPage} />
          <Route path="/train/:trainNumber" component={SingleTrainPage} />
          <Route path="/register" component={RegisterCompany} /> {/* Add the registration route */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
