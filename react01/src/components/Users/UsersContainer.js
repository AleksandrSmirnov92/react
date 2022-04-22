import React from "react"
import { connect } from "react-redux"
import { followActionCreator, setUsersActionCreator, unfollowActionCreator,setCurrentPageActionCreator,setUsersTotalCountActionCreator,isFetchingActionCreator } from "../../redax/UsersReduce"
import Users from "./Users";
import * as axios from "axios";
import preloader from '../../images/loadsvg.svg'
import styles from "./Users.module.css";
class UsersApiComponent extends React.Component {
   constructor(props) {
     super(props);
   }
   componentDidMount() {
      this.props.togallIsFetching(true)
     axios
       .get(
         `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
       )
       .then((response) => {
         this.props.togallIsFetching(false)
         this.props.setUsers(response.data.items);
         this.props.setUsersTotalCount(response.data.totalCount);
       });
   }
   onPageChanged = (pageNumber) => {
     this.props.setCurrentPage(pageNumber);
     this.props.togallIsFetching(true)
     axios
       .get(
         `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
       )
       .then((response) => {
         this.props.setUsers(response.data.items);
         this.props.togallIsFetching(false)
       });
   };
   render() {
     return (<>
     {/* {this.props.isFetching ? <img className={styles.userPhoto} src={preloader}/> : null} */}
       <Users
         totalUsersCount={this.props.totalUsersCount}
         pageSize={this.props.pageSize}
         currentPage= {this.props.currentPage}
         onPageChanged = {this.onPageChanged}
         users = {this.props.users}
         follow = {this.props.follow}
         unfollow= {this.props.unfollow}
         isFetching = {this.props.isFetching}
       />
       </>
     );
   }
 }

const mapStateToProps = (state) => {

   return {
      users:state.usersPage.users,
      pageSize:state.usersPage.pageSize,
      totalUsersCount:state.usersPage.totalUsersCount,
      currentPage:state.usersPage.currentPage,
      isFetching:state.usersPage.isFetching
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
      },
      togallIsFetching: (isFetching) => {
         dispatch(isFetchingActionCreator(isFetching))
      }
   }
}
export default connect(mapStateToProps,mapDispatchToProps) (UsersApiComponent)