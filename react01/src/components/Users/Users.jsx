import React from "react"
const Users = (props) => {
   debugger
   if (props.users.length === 0) {
   props.setUsers(
      [
         {
           id: 1,
           followed: true,
           fullname: "Dmitriy",
           status: "i m boss",
           location: { city: "Minsk", country: "Belarus" },
         },
         {
           id: 2,
           followed: false,
           fullname: "Sasha",
           status: "i m boss too",
           location: { city: "Moscow", country: "Russia" },
         },
       ]
      
   )
      }
      
return (
   
   <div>
      {props.users.map((user) => {
         return (
         <div key = {user.id}>
            <span>
                {user.followed ? <button onClick={() => {props.unfollow(user.id)}}>unfollow</button> : <button onClick={() => {props.follow(user.id)}}>follow</button>}
            </span>
            <span>
               <span>
                  <div>{user.fullname}</div>
                  <div>{user.status}</div>
               </span>
               <span>
                  <div>{user.location.country}</div>
                  <div>{user.location.city}</div>
               </span>
            </span>
         </div>
      )})}
   </div>
)
}
export default Users