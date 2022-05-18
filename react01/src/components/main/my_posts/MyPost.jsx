import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from 'react';
import posts from "./MyPost.module.css";
import Post from './post/post';
// import { addPostActionCreator ,apdatePostActionCreator} from '../../../redax/profileReduce';

const MyPost = (props) => {
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
     <MyPostFormik oneButtonClick={props.addPost} onPostChange={props.updateNewPostText}/>
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
const MyPostFormik = (props) => {
  const addNewMessage = (values) => {
    props.onPostChange(values)
  }
  return(
    <div>
    <Formik
    initialValues={{
      newPostText: "",
    }}
    onSubmit={(values, { setSubmitting ,resetForm}) => {
      setTimeout(() => {
        
        addNewMessage(values.newPostText)
        props.oneButtonClick()
        resetForm(values)
        setSubmitting(false);
      }, 400);
    }}
    >
      {()=>(

        <Form>
    <Field as={"textarea"} name={"newPostText"} placeholder={"Введите сообщение"}></Field>
       <div>
       <button type="submit"><span>Button</span></button>
       <span>FORMIK</span>
       </div>
       
       </Form>
      )}
       </Formik>
       </div>
  )
}
export default MyPost;