import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from './login';
import DashBoard from './dashBoard';
import { ContactsProvider } from '../contexts/contactsProvider';
import { ConversationsProvider } from "../contexts/conversationsProvider";
import { SocketProvider } from '../contexts/socketProvider';

function App() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <DashBoard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  return (
    id ? dashboard : <Login onIdSubmit={setId} />
  )
}

export default App;
