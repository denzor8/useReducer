import React,{useState} from 'react';
import UsersContextProvider from './contactContext';
// import UsersContextProvider from './UsersContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// users
import AddContact from './components/AddContact/AddContact';
import EditContact from './components/EditContact/EditContact';
import UsersList from './components/UsersList/UsersList';
import Details from './components/Details/Details';

const App = () => {
  return (
    <UsersContextProvider>
      <BrowserRouter>
        <Routes>
          {/* users routes */}
          {/* <Route path="/add" element={<AddContact />} /> */}
          <Route path="/edit/:id" element={<EditContact />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/users" element={<><AddContact /><UsersList /></>} />
        </Routes>
      </BrowserRouter>
    </UsersContextProvider>
  )
}

export default App