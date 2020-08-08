import React, { ReactElement } from 'react';
import './App.css';
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList';
import SubHeading from './components/SubHeading/SubHeading';
import SuperExample from './components/playing-around/SuperExample'

const App: React.FC = (): ReactElement => {
  return (
    <React.Fragment>
      <Header name="amazon header" title="amazon title"></Header>
      <SubHeading name="sayan"></SubHeading>
      <TodoList foo={'hello'} bar={123}></TodoList>
      <SuperExample></SuperExample>
    </React.Fragment>
  );
};

export default App;
