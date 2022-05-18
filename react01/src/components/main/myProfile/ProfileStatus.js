import React from "react";

// class ProfileStatus extends React.Component {
//   state = {
//     editMode: false,
//     status:this.props.status
//   };

//   activateEditMode = () => {
//     debugger;
//     this.setState({
//       editMode: true,
//     });
//   };
//   deactivateEditMode = () => {
//     debugger;
//     this.setState({
//       editMode: false,
//     });
//     this.props.upDateStatus(this.state.status)
//   };
//   onStatusChange = (event) => {
//    this.setState({
//      status:event.currentTarget.value
//    })
//   }
//   componenDidUpdate = (prevProps,prevState) => {
//     if (prevProps.status !== this.props.status){
//     this.setState({
//       status:this.props.status
//     })
//   }
 
//   }

//   render() {
//     return (
//       <div>
//         {!this.state.editMode && (
//           <span 
//          //  onDoubleClick={this.activateEditMode.bind(this)
//           onDoubleClick={this.activateEditMode}
//           >
//             {this.props.status || "No status"}
//           </span>
//         )}
//         {this.state.editMode && (
//           <input
//           onChange={this.onStatusChange}
//             autoFocus={true}
//             value={this.state.status}
//             placeholder="Статус"
//             // onBlur={this.deactivateEditMode.bind(this)
//             onBlur={this.deactivateEditMode}
//           ></input>
//         )}
//       </div>
//     );
//   }
// }
// export default ProfileStatus;
