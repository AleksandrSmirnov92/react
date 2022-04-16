// import React from "react";
// import posts from "./MyPost.module.css";
// import Post from "./post/post";
import {
  addPostActionCreator,
  apdatePostActionCreator,
} from "../../../redax/profileReduce";
import MyPost from "./MyPost";
// import StoreContext from "../../../storeCotext";
import { connect } from "react-redux";
// const MyPostContainer = (props) => {
 
//   // let state = props.store.getState();
//   // function oneButtonClick() {
//   //   let text = newPostElement.current.value;
//   //   props.addPost()
//   //   props.store.dispatch(addPostActionCreator());
//   // }
//   // let onPostChange = (text) => {
//   //   props.store.dispatch(apdatePostActionCreator(text));
//   // };
  
//   return (
//     <StoreContext.Consumer>
//       {
//       (store) => {
//         function oneButtonClick() {
//           // let text = newPostElement.current.value;
//           // props.addPost()
//           store.dispatch(addPostActionCreator());
//         }
//         let onPostChange = (text) => {
//           store.dispatch(apdatePostActionCreator(text));
//         };
//         let state = store.getState();
//       return (<MyPost
//         updateNewPostText={onPostChange}
//         addPost={oneButtonClick}
//         posts={state.profilePage.postData}
//         newPostText={state.profilePage.newPostText}
//       />)}}
//     </StoreContext.Consumer>
//   );
// };

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
