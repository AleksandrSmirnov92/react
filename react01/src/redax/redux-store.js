import {combineReducers, createStore,applyMiddleware} from "redux"
import profileReduce from "./profileReduce";
import dialogsReduce from "./dialogsReduce";
import usersReduce from "./UsersReduce";
import authReduce from "./AuthReducer"
import thunkMiddleware from "redux-thunk"
let redusers= combineReducers(
   {
      profilePage:profileReduce,
      massagePage:dialogsReduce,
      usersPage:usersReduce,
      auth:authReduce
   }
)
let store = createStore(redusers,applyMiddleware(thunkMiddleware))
window.store = store
export default store