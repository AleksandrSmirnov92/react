import * as axios from "axios";
import React from "react";
import styles from "./Users.module.css";
import UserPhoto from "../../images/user.png";
import preloader from "../../images/loadsvg.svg";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
// import { unfollowAPI, followAPI } from "../../API/api";
// import {unfollowAc} from "../../redax/UsersReduce"
let Users = (props) => {
  debugger
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i < pagesCount + 1; i++) {
      pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / 10)
  let [positionNumber, setPositionNumber] = useState(1)
  let leftPorttionPageNumber = (positionNumber - 1) * 10 + 1
  let rightPositionPageNumber = positionNumber * 10
  console.log(props.pageSize)
  // let b = 0
  // for (let i = pagesCount + 1; i > 0; i--) {
  //   b++
  //   if (b <= 10) {
  //     pages.push(i);
  //   } else {
  //     break;
  //   }
  // }
  return (
    <div>
      <div className={styles.mainContent}>
        <div className={styles.usersPage}>
          { (positionNumber > 1 && <button onClick={() => {setPositionNumber(positionNumber - 1)}}>Right</button> ) }
          {pages.filter(p => p >= leftPorttionPageNumber && p <= rightPositionPageNumber)
             .map((users) => {
            return (
              <span
                onClick={(e) => {
                  props.onPageChanged(users);
                }}
                className={
                  props.currentPage === users ? styles.usersPagesColor : ""
                }
              >
                {users}
              </span>
            );
          })}
          {positionNumber < portionCount && <button onClick={() => {setPositionNumber(positionNumber + 1)}}>Left</button>}
        </div>

        <img
          src={preloader}
          className={
            props.isFetching ? styles.imgfetching : styles.imgfetching2
          }
        />

        {props.users.map((user) => {
         
          return (
            <div key={user.id}>
              <div className={styles.userBox}>
                <Link to={`./../main/` + user.id}>
                  <img
                    src={
                      user.photos.small !== null ? user.photos.small : UserPhoto
                    }
                    className={styles.userPhoto}
                  />
                </Link>
                {user.followed ? (
                  <button
                    disabled={props.followingInProgress.some(id => id === user.id)}
                    onClick={() => {
                      // props.togglefollowingInProgress(true,user.id);
                      // unfollowAPI(`${user.id}`).then((data) => {
                      //   if (data.resultCode === 0) {
                      //     props.unfollow(user.id);
                      //   }
                      //   props.togglefollowingInProgress(false,user.id);
                      // });
                      props.unfollow(user.id)
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(id => id === user.id)}
                    onClick={() => {
                      // props.togglefollowingInProgress(true,user.id);
                      // followAPI(user.id).then((data) => {
                      //   if (data.resultCode === 0) {
                      //     props.follow(user.id);
                      //   }
                      //   props.togglefollowingInProgress(false,user.id);
                      // });
                      props.follow(user.id)
                    }}
                  >
                    follow
                  </button>
                )}
              </div>
              <span className={styles.username}>
                <span>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
                </span>
                <span>
                  <div>{"user.location.country"}</div>
                  <div>{"user.location.city"}</div>
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Users;
