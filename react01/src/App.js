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
import Login from './Login/Login';
// import { connect } from 'formik';
// import{setUserData,getAuthUserData,LogoutUser} from "../../react01/src/redax/AuthReducer"
// import { connect } from 'react-redux';
// import {compose} from "redux"

// import {useLocation,useNavigate,useParams} from "react-router-dom"

 const App = (props) => {
   
  return (
    <BrowserRouter>
    <div className="wrapper">
      <HeaderContainer />
      <Nav />
      
      <Routes > {/*Теперь react-router-dom*/}
      <Route path='/login' element={<Login/>}/>
      <Route path='/main/:userId' element= {<MainContainer />} className='app-wrapper-content'/>
      <Route path='/main' element= {<MainContainer />} className='app-wrapper-content'/>
      <Route path='/Dialogs' element= {<DialogsContainer className='app-wrapper-content'/>} />
      <Route path='/news' element = {<News/>} className='app-wrapper-content'/>
      <Route path = 'Music' className='app-wrapper-content'/>
      <Route path='/Users' element= {<UsersContainer/>} className='app-wrapper-content'/>
      <Route path = 'Settings' className='app-wrapper-content'/>
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}
// class App extends React.Component {
//   componentDidMount() {
//     this.props.getAuthUserData()
//   }
//    render (){
//   return (
//     <BrowserRouter>
//     <div className="wrapper">
//       <HeaderContainer />
//       <Nav />
      
//       <Routes > {/*Теперь react-router-dom*/}
//       <Route path='/login' element={<Login/>}/>
//       <Route path='/main/:userId' element= {<MainContainer />} className='app-wrapper-content'/>
//       <Route path='/main' element= {<MainContainer />} className='app-wrapper-content'/>
//       <Route path='/Dialogs' element= {<DialogsContainer className='app-wrapper-content'/>} />
//       <Route path='/news' element = {<News/>} className='app-wrapper-content'/>
//       <Route path = 'Music' className='app-wrapper-content'/>
//       <Route path='/Users' element= {<UsersContainer/>} className='app-wrapper-content'/>
//       <Route path = 'Settings' className='app-wrapper-content'/>
//       </Routes>
     
//     </div>
//     </BrowserRouter>
//   );
//    }
// }
// function withRouter (Component) {
//   function ComponentWithRouterProp (props) {
//      let location = useLocation();
//      let navigate = useNavigate();
//      let params = useParams()
//      return (
//         <Component {...props} router={{location,navigate,params}}/>
//      )
//   }
//   return ComponentWithRouterProp
// }

 
// export default compose(withRouter,connect(null,getAuthUserData))(App)

export default App;
