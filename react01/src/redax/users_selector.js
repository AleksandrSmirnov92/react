 import React from "react"
import { createSelector } from "reselect"

 export const getUsersSelector = (state) => {
    debugger
   return (
      state.usersPage.users
   )
 }
 
 
 export const getUsers = createSelector(getUsersSelector,(user)=>{
  return ( 
     user
     )
 })


 export const getPageSize = (state) => {
   return (
      state.usersPage.pageSize
   )
 }
 export const getTotalUsersCount = (state) => {
   return (
      state.usersPage.totalUsersCount
   )
 }
 export const getCurrentPage = (state) => {
   return (
      state.usersPage.currentPage
   )
 }
 export const getIsFetching = (state) => {
   return (
      state.usersPage.isFetching
   )
 }
 export const getfollowingInProgress = (state) => {
   return (
      state.usersPage.followingInProgress
   )
 }