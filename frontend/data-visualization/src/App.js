import React from 'react';
import './App.css';
import Header from "./components/Header";
import Addcontact from './components/Addcontact';
import Contactlist from "./components/Contactlist";



function App() {
  const contacts = [
    {
      id : "1",
      "name": "santhosh",
      "email":"punk18@gmail.com"
    },
    {
      id : "2",
      "name": "syed",
      "email":"syedpunk18@gmail.com"
    },
  ];
  return (
    <div className='ui container'>
      <Header />
      <Addcontact />
      <Contactlist contacts={contacts} />
    </div>
  );
}

export default App;
