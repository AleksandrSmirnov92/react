import { getProfile,upDateStatus,getStatus } from "../API/api";
const addPost = "ADD-POST";
const apdate = "APDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
let initialState = {
  postData: [
    { id: 1, massage: "hi how are you?", likescount: 0 },
    { id: 2, massage: "it's my first post", likescount: 12 },
    { id: 3, massage: "you" },
    { id: 4, massage: "yo" },
    { id: 5, massage: "yo" },
  ],
  newPostText: "",
  profile: null,
  status: "",
};

const profileReduce = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case addPost: {
      let newPost = {
        id: 5,
        massage: state.newPostText,
        likescount: 0,
      };
      stateCopy = {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: "",
      };
      return stateCopy;
    }
    case apdate: {
      stateCopy = { ...state, newPostText: action.NewText };
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      stateCopy = {
        ...state,
        profile: action.profile,
      };
      return stateCopy;
    }
    case SET_STATUS: {
      stateCopy = {
        ...state,
        status: action.status,
      };
      return stateCopy
    }

    default:
      return state;
  }
};
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
    profile: profile,
  };
};
export const getUserProfile = (userId) => (dispatch) => {
  return getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};
export const setStatus = (status) => {
  return { type: SET_STATUS,
    status:status
  };
};
export const getUserStatus = (userId) => (dispatch) => {
  
  return getStatus(userId).then((response) => {
    
    dispatch(setStatus(response.data));
  });
};
export const upDateUserStatus = (status) => (dispatch) => {
  return upDateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
    }
  });
};
export default profileReduce;
