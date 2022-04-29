import React from 'react';
import Header from './Header';
// import "./header.css";
import headers from "./header.module.css"
import * as axios from "axios";
import { connect } from 'react-redux';
import{setUserData,getAuthUserData} from "../../redax/AuthReducer"
class HeaderContainer extends React.Component {
  componentDidMount() {
    // axios
    // .get(
    //   `https://social-network.samuraijs.com/api/1.0/auth/me`, {
    //     withCredentials:true
    //   }
    // )
    // authMe()
    // .then((response) => {
     
    // if(response.data.resultCode === 0) {
    //   let {email,id,login} = response.data.data
    //   this.props.setUserData(id,email,login)
    // }
    // });
    this.props.getAuthUserData()
  }
  render(){
   return (
   <Header {...this.props}/>
   )
}
}
const mapStateToProps = (state) => {
 return(
  {
    isAuth: state.auth.isAuth,
    login:state.auth.login
  }
 )
}
const mapDispatchToProps = (dispatch) => {

 return(
  {
    // setUserData:(id,email,login) => {
    //   dispatch(setUserData(id,email,login))
    // },
    getAuthUserData:(id,email,login) => {
      dispatch(getAuthUserData(id,email,login))
    }
    
  }
 )
}



export default connect(mapStateToProps, mapDispatchToProps) (HeaderContainer);