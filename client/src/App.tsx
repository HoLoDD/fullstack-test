import React, { FC } from 'react';
import AppRouter from './components/AppRouter';
import NavBar from './components/navbar/navbar';
import './App.css';

const App: FC = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <AppRouter />
      </main>
    </>
  );
}

export default App;
