const addPost = "ADD-POST";
const apdate = "APDATE-NEW-POST-TEXT";

let initialState = {
  postData: [
    { id: 1, massage: "hi how are you?", likescount: 0 },
    { id: 2, massage: "it's my first post", likescount: 12 },
    { id: 3, massage: "you" },
    { id: 4, massage: "yo" },
    { id: 5, massage: "yo" },
  ],
  newPostText: "",
}

const profileReduce = (state = initialState, action) => {

  let stateCopy
  switch (action.type) {
    case addPost:{
      let newPost = {
        id: 5,
        massage: state.newPostText,
        likescount: 0,
      };
      stateCopy = {...state,
      postData:[...state.postData, newPost],
        newPostText: ""
      }
      return stateCopy
    } 
    case apdate: {
       stateCopy = {...state,
      newPostText: action.NewText
      }
      return stateCopy
    }
    
   default: 
     return state
   

   
}}
export const addPostActionCreator = () => {
   return {
     type: addPost,
   };
 };
 export const apdatePostActionCreator = (text) => {
   return {
     type: apdate,
     NewText: text,
   };
 };
 
export default profileReduce