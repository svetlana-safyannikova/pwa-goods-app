import React, { useState } from 'react';
import './App.css';
import { AppHeader } from './AppHeader.jsx';
import { MainPage } from './MainPage.jsx';
import { ModalForm } from './ModalForm.jsx';

function App() {
  const [isModalFormVisible, setModalFormVisibility] = useState(false);
  const setModalFormVisible = () =>{
    setModalFormVisibility(true);
  }
  const setModalFormInVisible = () =>{
    setModalFormVisibility(false);
  }
  return (
    <div className="App">
      <AppHeader />
      <MainPage isModalFormVisible = {isModalFormVisible} setModalFormVisible = {setModalFormVisible}/>
      {isModalFormVisible && <ModalForm setModalFormInVisible = {setModalFormInVisible}/>}
    </div>
  );
}

export default App;
