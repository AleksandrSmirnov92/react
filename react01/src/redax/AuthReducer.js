import {authMe,login,logout} from "../API/api"
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
export const setUserData = (id, email, login,isAuth) => {
  return {
      type:SET_USER_DATA,
      data: {
        id:id,
        email:email,
        login:login,
        isAuth:isAuth
      }

    }
  
}
export const getAuthUserData = () => async (dispatch) => {

 let response = await authMe()
  
   
  if(response.data.resultCode === 0) {
    let {email,id,login} = response.data.data
    dispatch(setUserData(id,email,login,true))
  }
  

}
export const LoginUser = (email,password,remeberMe,) => (dispatch) => {
  return(
    login(email,password,remeberMe)
    .then((response) => {
     
    if(response.data.resultCode === 0) {
      dispatch(getAuthUserData())
    } 
    
    })
  )
  }
  export const LogoutUser = () => (dispatch) => {
    return(
      logout()
      .then((response) => {
       
      if(response.data.resultCode === 0) {
        dispatch(setUserData(null,null,null,false))
      }
      })
    )
    }
export default authReduce;
