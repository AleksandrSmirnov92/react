import React from 'react';
import './App.css';
// import Header from './components/header/Header';
// import Main from './components/main/main';
import Nav from './components/navigation/navigation';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from './components/Dialogs/Dialogs-container';
import News from './components/news/news';
import UsersContainer from './components/Users/UsersContainer';
import MainContainer from './components/main/mainContainer';
import HeaderContainer from './components/header/HeaderContainer';



 const App = (props) => {
   
  return (
    <BrowserRouter>
    <div className="wrapper">
      <HeaderContainer />
      <Nav />
      <Routes className='app-wrapper-content'> {/*Теперь react-router-dom*/}
      <Route path='/main/:userId' element= {<MainContainer />}/>
      <Route path='/Dialogs' element= {<DialogsContainer />} />
      <Route path='/news' element = {<News/>} />
      <Route path = 'Music' />
      <Route path='/Users' element= {<UsersContainer/>} />
      <Route path = 'Settings' />
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
