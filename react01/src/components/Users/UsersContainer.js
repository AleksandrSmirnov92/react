import React from "react"
import { connect } from "react-redux"
import { followActionCreator, setUsersActionCreator, unfollowActionCreator,setCurrentPageActionCreator,setUsersTotalCountActionCreator } from "../../redax/UsersReduce"
import Users from "./UsersCopy"

const mapStateToProps = (state) => {

   return {
      users:state.usersPage.users,
      pageSize:state.usersPage.pageSize,
      totalUsersCount:state.usersPage.totalUsersCount,
      currentPage:state.usersPage.currentPage
   }
}
const mapDispatchToProps = (dispatch) => {
   
   return {
      follow: (userId) => {
         dispatch(followActionCreator(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowActionCreator(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersActionCreator(users))
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageActionCreator(pageNumber))
      },
      setUsersTotalCount: (totalCount) => {
         dispatch(setUsersTotalCountActionCreator(totalCount))
      }
   }
}
export default connect(mapStateToProps,mapDispatchToProps) (Users)