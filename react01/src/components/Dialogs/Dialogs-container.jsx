import React from "react";
import style from "./dialogs.module.css";
import Dialogitem from "./Dialogitem/Dialogitem";
import Massage from "./Dialogmassage/Dialogmassage";
import {
  sendMassageCreator,
  updateNewMassageBodyCreator,
} from "../../redax/dialogsReduce";
import Dialogs from "./Dialogs";
// import StoreContext from "../../storeCotext";
import { connect } from "react-redux";

// const DialogsContainer = () => {
 

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//          let state = store.getState().massagePage;

//          let onSendMassageClick = () => {
//            store.dispatch(sendMassageCreator());
//          };
//          let onNewMassageChange = (body) => {
//            store.dispatch(updateNewMassageBodyCreator(body));
//          };
//        return  <Dialogs
//           updateNewMassageBody={onNewMassageChange}
//           SendMassage={onSendMassageClick}
//           massagePage={state}
//         />;
       
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  debugger
  return {
    massagePage:state.massagePage,
    isAuth:state.auth.isAuth
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMassageBody: (body)=>{
      dispatch(updateNewMassageBodyCreator(body));
    },
    SendMassage: () => { 
       dispatch(sendMassageCreator());
      }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);



export default DialogsContainer;
