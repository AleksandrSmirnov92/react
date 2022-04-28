const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT-PAGE"
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT"
const IS_FETCHING = "IS_FETCHING"
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS"
let initialState = {
  users: [],
  pageSize:10,
  totalUsersCount:0,
  currentPage:1,
  isFetching:false,
  followingInProgress: []
};
const usersReduce = (state = initialState, action) => {
  
  let stateCopy
  switch (action.type) {
    case FOLLOW:
       stateCopy = {
        ...state,
        users: state.users.map((users) => {
          if (users.id === action.userId) {
            return { ...users, followed: true };
          }
          return users;
        }),
      };
      return stateCopy;
    case UNFOLLOW:
       stateCopy = {
        ...state,
        users: state.users.map((users) => {
          if (users.id === action.userId) {
            return { ...users, followed: false };
          }
          return users;
        }),
      };
      return stateCopy;
      case SET_USERS : {
         return {...state, users: action.users}
      }
      case SET_CURRENT_PAGE: {
        return {
          ...state,currentPage:action.currentPage
        }
      }
      case SET_USERS_TOTAL_COUNT: {
        return {
          ...state,totalUsersCount:action.totalCount
        }
      }
      case IS_FETCHING: {
        return {
          ...state,isFetching:action.isFetching
        }
      }
      case FOLLOWING_IN_PROGRESS: {
        return {
        ...state,followingInProgress:action.followingInProgress
        ?[...state.followingInProgress,action.userId]
        :state.followingInProgress.filter(id => id!= action.userId)
        }
      }

    default:
      return state;
  }
};
export const followActionCreator = (userId) => {
  return {
    type: FOLLOW,
    userId: userId,
  };
};
export const unfollowActionCreator = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId,
  };
};
export const setUsersActionCreator = (users) => {
   return {
      type : SET_USERS,
      users: users
   }

}
export const setCurrentPageActionCreator = (currentPage) => {
  return {
    type:SET_CURRENT_PAGE,
    currentPage: currentPage
  }
}
export const setUsersTotalCountActionCreator = (totalCount) => {
  return {
  type: SET_USERS_TOTAL_COUNT,
  totalCount: totalCount
  }
}
export const isFetchingActionCreator = (isFetching) => {
  return {
  type: IS_FETCHING,
  isFetching: isFetching
  }
}
export const followingInProgressActionCreator = (following, userId) => {
  return {
    type:FOLLOWING_IN_PROGRESS,
    followingInProgress:following,
    userId:userId
  }
}
export default usersReduce;
