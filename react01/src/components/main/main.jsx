import React from 'react';
// import "./main.css";
import mains from "./main.module.css";
import ProfileInfo from './myProfile/profileinfo';
// import MyPost from './my_posts/MyPost';
import MyPostContainer from './my_posts/MyPost-Container';




const Main = (props) => {
 
return (
   <div className={mains.main}>
   <img src='https://semantica.in/wp-content/uploads/2018/01/580b57fcd9996e24bc43c4c4-300x300.png' className = {mains.main_img} alt=""></img>
   <ProfileInfo profile={props.profile} status={props.status} upDateStatus= {props.upDateStatus}/>
   <MyPostContainer />
  
 </div>
 

);
}
export default Main;