import React from "react";
import { NavLink } from "react-router-dom";
// import "./header.css";
import headers from "./header.module.css";
const Header = (props) => {
  return (
    <header className={headers.header}>
      <img
        src="https://ilounge.ua/files/articles/sekretnoe-poslanie00002.jpeg"
        className={headers.header_img}
        alt=""
      ></img>

      {props.isAuth ? (
       <span>{props.login} <button onClick={props.LogoutUser}>LogOut</button></span>
      ) : (
        <NavLink to="./login" className={headers.loginblock}>
          Login
        </NavLink>
      )}
    </header>
  );
};
export default Header;
