import React, { ReactElement } from 'react';
import './App.css';
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList';
import SubHeading from './components/SubHeading/SubHeading';

const App: React.FC = (): ReactElement => {
  return (
    <React.Fragment>
      <Header name="amazon header" title="amazon title"></Header>
      <SubHeading name="sayan"></SubHeading>
      <TodoList foo={'hello'} bar={123}></TodoList>
    </React.Fragment>
  );
};

export default App;
