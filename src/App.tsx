import React, { ReactElement } from 'react';
import './App.css';
import Header from './components/Header/Header'

const App: React.FC = (): ReactElement => {
  return (
    <React.Fragment>
      <Header name="amazon header" title="amazon title"></Header>
    </React.Fragment>
  );
};

export default App;
