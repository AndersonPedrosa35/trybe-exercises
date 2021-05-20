import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UsersId from './components/UsersId';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    const userObj = { 'login': '1234' };
    return (
      <BrowserRouter>
         <Switch> {/* Renderiza somente 1 url por vez */}
          <Route exact path='/' component={Home}  /> 
          <Route path='/About' component={About} />
          <Route exact path='/Users' render={(props) => <Users {...props} greetingMessage='Good Afternoon' />} />
          <Route exact path='/Users/:userId' render={ (props) => <StrictAccess {...props} user={userObj}  />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
