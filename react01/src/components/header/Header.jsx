import React from 'react';
// import "./header.css";
import headers from "./header.module.css"
const Header = () => {
   return (
   <header className={headers.header}>
        <img src='https://ilounge.ua/files/articles/sekretnoe-poslanie00002.jpeg' className={headers.header_img} alt=''></img>
        
      </header>);
}
export default Header;