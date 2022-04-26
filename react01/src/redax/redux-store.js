import {combineReducers, createStore} from "redux"
import profileReduce from "./profileReduce";
import dialogsReduce from "./dialogsReduce";
import usersReduce from "./UsersReduce";

let redusers= combineReducers(
   {
      profilePage:profileReduce,
      massagePage:dialogsReduce,
      usersPage:usersReduce
   }
)
let store = createStore(redusers)
window.store = store
export default store