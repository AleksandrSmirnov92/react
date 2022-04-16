import React from 'react';
// import "./main.css";
import posts from "./post.module.css";
const Post = (props) => {
return (
  
        <div>
       <span className={posts.item}>{props.massage}</span>
       <span className={posts.item}> Like {props.like}</span>
       </div>

);
}
export default Post;