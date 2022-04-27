import * as axios from "axios";
import React from "react";
import styles from "./Users.module.css";
import UserPhoto from "../../images/user.png";
import preloader from '../../images/loadsvg.svg'
import { NavLink,Link } from "react-router-dom";
let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i < pagesCount + 1; i++) {
    if (i <= 10) {
      pages.push(i);
    } else {
      break;
    }
  }
  return (
    <div>
      <div className={styles.mainContent}>
        <div className={styles.usersPage}>
          {pages.map((users) => {
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
        </div>
        
        <img src={preloader} className = {props.isFetching ? styles.imgfetching: styles.imgfetching2}/>
        
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
                /></Link>
                {user.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(user.id);
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
