import React, { useEffect, useState } from "react"
const ProfileStatusWithHooks = (props) => {
  
     let [editMode,setEditMode] = useState(false)
     let [status,setStatus] = useState(props.status)
     
     useEffect(()=>{
        setStatus(props.status)
     },[props.status])
     
     const activateEditMode = () => {
      setEditMode(true)
     }
     const deactivateEditMode = () => {
        setEditMode(false)
        props.upDateStatus(status)
     }
     const onStatusChange = (e) => {
      setStatus(
         e.currentTarget.value
      )
     }

     return (
       <div>
         {!editMode && (
           <span 
          //  onDoubleClick={this.activateEditMode.bind(this)
           onDoubleClick={activateEditMode}
           >
             {props.status || "No status"}

           </span>
         )}
         {editMode && (
           <input
           onChange={onStatusChange}
            //  autoFocus={true}
             value={status}
             placeholder="Статус"
             // onBlur={this.deactivateEditMode.bind(this)
             onBlur={deactivateEditMode}
           ></input>
         )}
       </div>
     );
   
 }
 export default ProfileStatusWithHooks