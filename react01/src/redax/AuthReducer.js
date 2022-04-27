const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
  id: null,
  email:null,
  login:null,
  isAuth:false
 
};
const authReduce = (state = initialState, action) => {
  
  let stateCopy
  switch (action.type) {
    case SET_USER_DATA:
       stateCopy = {
        ...state,
        ...action.data,
        isAuth:true
          }
          return stateCopy;
      default:
        return state
  }
};
export const setUserData = (id, email, login) => {
  return {
      type:SET_USER_DATA,
      data: {
        id:id,
        email:email,
        login:login
      }

    }
  
}
export default authReduce;