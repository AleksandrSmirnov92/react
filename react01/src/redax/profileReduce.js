const addPost = "ADD-POST";
const apdate = "APDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"
let initialState = {
  postData: [
    { id: 1, massage: "hi how are you?", likescount: 0 },
    { id: 2, massage: "it's my first post", likescount: 12 },
    { id: 3, massage: "you" },
    { id: 4, massage: "yo" },
    { id: 5, massage: "yo" },
  ],
  newPostText: "",
  profile:null
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
    case SET_USER_PROFILE: { 
      stateCopy= {
        ...state,
        profile:action.profile
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
 export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile:profile
  };
};
 
export default profileReduce