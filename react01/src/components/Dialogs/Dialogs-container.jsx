import React from "react";
import {
  sendMassageCreator,
  updateNewMassageBodyCreator,
} from "../../redax/dialogsReduce";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect"
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    massagePage:state.massagePage,
    // isAuth:state.auth.isAuth
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

//  compose(connect(mapStateToProps, mapDispatchToProps) ,withAuthRedirect)(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);



// export default DialogsContainer;
export default compose(connect(mapStateToProps, mapDispatchToProps) ,withAuthRedirect)(Dialogs);