import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  setCurrentPageActionCreator,
  followingInProgressActionCreator,
  getUsersThunkCreator,
  unfollowAc,
  followAc
} from "../../redax/UsersReduce";
import Users from "./Users";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect"
class UsersApiComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsersThunkCreator(pageNumber,this.props.pageSize)
    this.props.setCurrentPage(pageNumber);
  };
  render() {
    return (
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFetching={this.props.isFetching}
          togglefollowingInProgress={this.props.togglefollowingInProgress}
          followingInProgress={this.props.followingInProgress}
        />
     
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress:state.usersPage.followingInProgress
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber));
    },
    togglefollowingInProgress:(following) => {
       dispatch(followingInProgressActionCreator(following))
    },
    getUsersThunkCreator: (currentPage,pageSize) => {
      dispatch(getUsersThunkCreator(currentPage,pageSize))
    },
    unfollow: (userId) => {
      dispatch(unfollowAc(userId));
    },
    follow: (userId) => {
      dispatch(followAc(userId));
    },
  };
};
export default compose(withAuthRedirect,connect(mapStateToProps, mapDispatchToProps))(UsersApiComponent)