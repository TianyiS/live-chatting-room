// import React , { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from './login';

function App() {

  const [id, setId] = useLocalStorage('id')

  return (
    <>
    {id}
    <Login onIdSubmit={setId} ></Login>
    </>
  );
}

export default App;
