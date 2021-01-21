// import React , { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from './login';
import DashBoard from './dashBoard';
import { ContactsProvider } from '../contexts/contactsProvider';

function App() {

  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <ContactsProvider>
      <DashBoard id={id} />
    </ContactsProvider>
  )

  return (
    <>
      {id ? dashboard : <Login onIdSubmit={setId} />}
    </>
  );
}

export default App;
