import { Component } from 'react';

import {Switch,Route} from 'react-router-dom'

import Login from './Components/Login'

import ProtectedPath from './Components/ProtectedPath';

import Home from './Components/Home'

import './App.css';

class App extends Component {
  render(){
    return (
      <Switch>
      <Route exact path='/login' component={Login}/>
      <ProtectedPath exact path='/' component={Home}/>
      </Switch>
    )
  }
}

export default App;
