const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"
let initialState = {
  users: 
  [
    // {
    //   id: 1,
    //   followed: true,
    //   fullname: "Dmitriy",
    //   status: "i m boss",
    //   location: { city: "Minsk", country: "Belarus" },
    // },
    // {
    //   id: 2,
    //   followed: false,
    //   fullname: "Sasha",
    //   status: "i m boss too",
    //   location: { city: "Moscow", country: "Russia" },
    // },
  ]
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
         return {...state, users: [...action.users]}
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

export default usersReduce;
