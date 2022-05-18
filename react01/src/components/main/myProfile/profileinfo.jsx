import React from "react";
import mains from "./ProfileInfo.module.css";
// import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusHooks"
const ProfileInfo = (props) => {
  
  if (!props.profile) {
    return (
      <div>
        <span>ждем</span>
      </div>
    );
  } 
    return (
      
      <div className={mains.main_avatar_and_desription}>
       
        <img
          src="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
          className={mains.main_avatar}
          alt=""
        ></img>
        <div className={mains.main_decription}>
        <ProfileStatusWithHooks status={props.status} upDateStatus={props.upDateStatus}/>
          <img src={props.profile.photos.large} alt=""/>
          <span>{props.profile.userId}</span>
          <h1> Dmitriy we</h1>
          <span>date of birth</span>
          <span>city</span>
          <span>Education</span>
        </div>
      </div>
    );
  };
export default ProfileInfo;
