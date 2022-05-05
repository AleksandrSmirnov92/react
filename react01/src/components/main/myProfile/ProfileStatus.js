import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    debugger;
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    debugger;
    this.setState({
      editMode: false,
    });
  };

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <span 
         //  onDoubleClick={this.activateEditMode.bind(this)
          onDoubleClick={this.activateEditMode}
          >
            {this.props.status}
          </span>
        )}
        {this.state.editMode && (
          <input
            autoFocus={true}
            value={this.props.status}
            placeholder="Статус"
            // onBlur={this.deactivateEditMode.bind(this)
            onBlur={this.deactivateEditMode}
          ></input>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
