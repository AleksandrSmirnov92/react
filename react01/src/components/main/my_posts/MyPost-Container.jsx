import React from "react";
import {
  addPostActionCreator,
  apdatePostActionCreator,
} from "../../../redax/profileReduce";
import MyPost from "./MyPost";

import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postData,
    newPostText:state.profilePage.newPostText
    }
  }

let mapDispatchToProps = (dispatch) => {

  return {
    
    updateNewPostText: (text) => {
      dispatch(apdatePostActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
    
  }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer;
