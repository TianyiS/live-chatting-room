// import React , { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from './login';
import DashBoard from './dashBoard';

function App() {

  const [id, setId] = useLocalStorage('id')

  return (
    <>
      {id ? <DashBoard id={id}/> : <Login onIdSubmit={setId} />}
    </>
  );
}

export default App;
