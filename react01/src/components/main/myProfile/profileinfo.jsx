import React from 'react';
// import "./main.css";
import mains from "./ProfileInfo.module.css";

const ProfileInfo = () => {
return (
  
   <div className= {mains.main_avatar_and_desription}>
       <img src='https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg' className= {mains.main_avatar} alt=""></img>
       <div className={mains.main_decription}>
         <h1> Dmitriy we</h1>
         <span>
           date of birth
         </span>
         <span>
           city
         </span>
         <span>
           Education
         </span>
       </div>
   </div>


 

);
}
export default ProfileInfo;