import React from 'react';
import LoginPage from './loginPge/loginPage';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import EmployeeList from './EmployeeList/employeeList';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  return (
    <Router>
      <div className="App">
        {/* Route for showing Login or EmployeeList */}
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route exact path="/details" render={() => (
            props.loggedIn ? (<Route component={EmployeeList} />)
              : (<Route>
                <Redirect to="/login"></Redirect>
              </Route>)
          )} />
          <Route path="/"> <Redirect to="/login"></Redirect></Route>
        </Switch>
      </div>
    </Router>
  );
}

// get the cuurent state for check userLogged in or not
function mapState(state) {
  return state;
}


export default connect(mapState)(App);
