import * as axios from "axios";
import React from "react";
import styles from "./Users.module.css";
import userPhoto from "./images/user.png";
const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  return (
    <div>
      {props.users.map((user) => {
        debugger;
        return (
          <div key={user.id}>
            <span className={styles.userBox}>
              <img
                srs={user.photos.small != null ? user.photos.small : userPhoto}
                className={styles.userPhoto}
              />
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
            </span>
            <span>
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
  );
};
export default Users;
