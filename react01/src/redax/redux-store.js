import {combineReducers, createStore} from "redux"
import profileReduce from "./profileReduce";
import dialogsReduce from "./dialogsReduce";
import usersReduce from "./UsersReduce";
import authReduce from "./AuthReducer"
let redusers= combineReducers(
   {
      profilePage:profileReduce,
      massagePage:dialogsReduce,
      usersPage:usersReduce,
      auth:authReduce
   }
)
let store = createStore(redusers)
window.store = store
export default store