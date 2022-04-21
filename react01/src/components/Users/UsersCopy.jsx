import * as axios from "axios";
import React from "react";
import styles from "./Users.module.css";
import UserPhoto from "../../images/user.png";
class Users extends React.Component {
  constructor(props) {
    super(props)
  }
    componentDidMount() {
      
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setUsersTotalCount(response.data.totalCount)
        })
    }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then((response) => {
      this.props.setUsers(response.data.items);
    })
  }
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i < pagesCount + 1; i++) {
      if (i <= 10) {
        pages.push(i)
      }
      else {
        break
      }
      
    }
    
    return (
      <div>
        <div className={styles.mainContent}>
        {this.props.users.map((user) => {
          debugger
          return (
            <div key={user.id}>
              <div className={styles.userBox}>
                <img
                  srs={
                    user.photos.small!==null?user.photos.small:UserPhoto
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
              </div>
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
         <div className={styles.usersPage}>
              {
              pages.map((users) => {
                  return  <span onClick={(e) => {this.onPageChanged(users)}} className={this.props.currentPage === users ? styles.usersPagesColor : ""}>{users}</span>
              })}
                </div>
        </div>
      </div>
    );
  }
}
export default Users;
