import React from 'react';
import classes from "./navigation.module.css"; // подключили обьект со значениями из css свойства и подключили их через обьект 
import { NavLink} from 'react-router-dom';
const Nav = () => {
return (
   <nav className={classes.navigation}>           
        <div className={classes.item}>
         <NavLink to='./main' className={({isActive}) => isActive ? classes.active : classes.item}>Profile</NavLink> 
        </div>
        <div className={classes.item}>
          <NavLink to='./Dialogs' className={({isActive}) => isActive ? classes.active : classes.item}>Message</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='./news' className={({isActive}) => isActive ? classes.active : classes.item }>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='./Music' className={({isActive}) => isActive ? classes.active : classes.item }>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='./Users' className={({isActive}) => isActive ? classes.active : classes.item }>Users</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='./Settings' className={({isActive}) => isActive ? classes.active : classes.item }>Settings</NavLink>
        </div>
      </nav>
);
}
export default Nav;