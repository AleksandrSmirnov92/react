import React from "react";
import style from "./../dialogs.module.css";
import { Link } from "react-router-dom";

const Dialogitem = (props) => {
   let path = "/dialogs/" + props.id
  return (
    <ul className={style.names}>
      <li>
        <Link to={path}>{props.name}</Link>
      </li>
    </ul>
  );
};


export default Dialogitem;
