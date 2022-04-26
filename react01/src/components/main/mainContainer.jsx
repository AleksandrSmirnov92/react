import React from 'react';
import Main from './main';
import * as axios from "axios";
import { connect } from 'react-redux';
import {setUserProfile} from "../../redax/profileReduce"


class MainContainer extends React.Component{
   constructor(props) {
      super(props);
    }
   componentDidMount() {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/profile/2`
        )
        .then((response) => {
           debugger
          this.props.setUserProfile(response.data);
          
        });
   }

render() {
return (
   <Main {...this.props} profile={this.props.profile}/>
);
}
}
let mapStateToProps = (state) => {
   
   return(
      {
         profile:state.profilePage.profile
      }
   )
}
const mapDispatchToProps = (dispatch) => {
   
   return {
      setUserProfile: (profile) => {
         dispatch(setUserProfile(profile))
      }
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainContainer);