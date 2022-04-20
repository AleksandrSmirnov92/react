import * as axios from "axios";
import React from "react";
import styles from "./Users.module.css";
import userPhoto from "./images/user.png";
class Users extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  }
  //  getUsers = () => {
    // if (this.props.users.length === 0) {
    //   axios
    //     .get("https://social-network.samuraijs.com/api/1.0/users")
    //     .then((response) => {
    //       this.props.setUsers(response.data.items);
    //     });
    // }
  // }
  render() {
    return (
      <div>
        {/* <button onClick={this.getUsers}>Get Users</button> */}
        {this.props.users.map((user) => {
          return (
            <div key={user.id}>
              <span className={styles.userBox}>
                <img
                  srs={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  className={styles.userPhoto}
                />
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
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
  }
}
export default Users;
