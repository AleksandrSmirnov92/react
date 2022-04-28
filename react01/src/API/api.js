import * as axios from "axios";


const instence = axios.create({
   withCredentials: true,
   headers:{
      "API-KEY": "55f4f20d-b522-4908-9d3b-ea3d9506431a"
    },
    baseURL:"https://social-network.samuraijs.com/api/1.0/"

})

export const getUsers = (currentPage, pageSize) => {
return (   
instence
  .get(
    `users?page=${currentPage}&count=${pageSize}`
  )
  .then(response => response.data)
)  
}

export const followAPI = (userId) => {
  return ( instence
                        .post(
                          `follow/${userId}`
                        )
                        .then (response => response.data)
  )
}
export const unfollowAPI = (userId) => {
  return ( instence
                        .delete(
                          `follow/${userId}`
                        )
                        .then(response => response.data)
  )
}