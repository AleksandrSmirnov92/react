import React from "react";
// import "./main.css";
import mains from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  debugger
  if (!props.profile) {
    return (
      <div>
        <span>ждем</span>
      </div>
    );
  } else {
    debugger
    return (
      <div className={mains.main_avatar_and_desription}>
        <img
          src="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
          className={mains.main_avatar}
          alt=""
        ></img>
        <div className={mains.main_decription}>
          <img src={props.profile.photos.large} />
          <h1> Dmitriy we</h1>
          <span>date of birth</span>
          <span>city</span>
          <span>Education</span>
        </div>
      </div>
    );
  }
};
export default ProfileInfo;
