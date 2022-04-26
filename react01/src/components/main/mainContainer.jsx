import React from 'react';
import Main from './main';
import * as axios from "axios";
import { connect } from 'react-redux';
import {setUserProfile} from "../../redax/profileReduce"
import{useLocation,useNavigate,useParams} from "react-router-dom"

class MainContainer extends React.Component{
   // eslint-disable-next-line no-useless-constructor
   constructor(props) {
      super(props);
    }
   componentDidMount() {
      let userId = this.props.router.params.userId
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
        )
        .then((response) => {
          
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
function withRouter (Component) {
   function ComponentWithRouterProp (props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams()
      return (
         <Component {...props} router={{location,navigate,params}}/>
      )
   }
   return ComponentWithRouterProp
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MainContainer));