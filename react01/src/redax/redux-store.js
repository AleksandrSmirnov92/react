import {combineReducers, createStore,applyMiddleware} from "redux"
import profileReduce from "./profileReduce";
import dialogsReduce from "./dialogsReduce";
import usersReduce from "./UsersReduce";
import authReduce from "./AuthReducer"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
let redusers= combineReducers(
   {
      profilePage:profileReduce,
      massagePage:dialogsReduce,
      usersPage:usersReduce,
      auth:authReduce,
      form:formReducer
   }
)
let store = createStore(redusers,applyMiddleware(thunkMiddleware))
window.store = store
export default store