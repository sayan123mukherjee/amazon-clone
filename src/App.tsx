import React, { ReactElement } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList';
import SubHeading from './components/SubHeading/SubHeading';
import SuperExample from './components/playing-around/SuperExample'
import HomePage from './pages/HomePage/HomePage'

const App: React.FC = (): ReactElement => {
  return (
      <Switch>
          <Route path="/" exact={true} component={HomePage}></Route>
          <Route path="/cart" render={() => (<h1>cart</h1>)}></Route>
      </Switch>
  );
};

export default App;
