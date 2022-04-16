import React from "react";
import style from "./dialogs.module.css";
import Dialogitem from "./Dialogitem/Dialogitem";
import Massage from "./Dialogmassage/Dialogmassage";
import { sendMassageCreator, updateNewMassageBodyCreator } from "../../redax/dialogsReduce";




const Dialogs = (props) => {
  
  let state = props.massagePage

  let dialogsElement = state.dialogs.map((dialog) => {
    return (
    <Dialogitem name = {dialog.name} id = {dialog.id} key = {dialog.id}/>
    )
  })
  let massagesElements = state.massages.map((massage)=>{
    return(
    <Massage massage = {massage.massage} key = {massage.id}/>
    )
  }
  )
  let newMassageBody = state.newMassageTextBody;
  let onSendMassageClick = () => {
    props.SendMassage()
    // props.store.dispatch(sendMassageCreator())
  }
  let onNewMassageChange = (e) => {
    let body = e.target.value
    props.updateNewMassageBody(body);
    // props.store.dispatch(updateNewMassageBodyCreator(body))
    
  }
 
  return (
    <div className={style.wrapper_dialogs}>
      <div className={style.dialogs_menuName}>
        <h2 className={style.menuName_h2}>Dialogs</h2>
        <div>
          {dialogsElement}
        </div>
      </div>
      <div className={style.dialogs_massage}>
         {massagesElements}
         <div>
           
           <div><textarea value = {newMassageBody} placeholder="enter your massage" onChange={onNewMassageChange}></textarea></div>
           <button onClick={onSendMassageClick}><span>Отправить</span></button>
         </div>
      </div>
    </div>
  );
};
export default Dialogs;
