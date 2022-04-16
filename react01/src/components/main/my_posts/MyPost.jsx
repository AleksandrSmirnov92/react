import React from 'react';
import posts from "./MyPost.module.css";
import Post from './post/post';
import { addPostActionCreator ,apdatePostActionCreator} from '../../../redax/profileReduce';

const MyPost = (props) => {
 debugger
  let postDataMap = props.posts.map((p)=>{
    return (
      <Post massage = {p.massage} like = {p.likescount}/>
    )
  })

  let newPostElement = React.createRef()
  function oneButtonClick () {
    // let text = newPostElement.current.value;
    props.addPost()
    //  props.dispatch(addPostActionCreator());
  }
  let onPostChange = () =>{
  
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
    // props.dispatch(apdatePostActionCreator(text));
  }
return (
   <div className={posts.myPosts}>
     <div>
       <textarea ref={newPostElement} value = {props.newPostText} onChange = {onPostChange}></textarea>
       <div>
       <button onClick={ oneButtonClick}><span>Button</span></button>
       </div>
       
     </div>
     {postDataMap}
     
     
     
   </div>



 

);
}
export default MyPost;