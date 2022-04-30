import React from "react";
import Main from "./main";
import * as axios from "axios";
import { connect } from "react-redux";
import { getUserProfile, setUserProfile} from "../../redax/profileReduce";
import { useLocation, useNavigate, useParams,Navigate } from "react-router-dom";
// import {getProfile} from "../../API/api"

class MainContainer extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  componentDidMount() {

    let userId = this.props.router.params.userId;
    this.props.getUserProfile(userId)
    // getProfile(userId)
    //   .then((response) => {
    //     this.props.setUserProfile(response.data);
    //   });
    
  }

  render() {
    if (!this.props.isAuth) {
      return <Navigate to={"/Login"}/>
    }
    return <Main {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (profile) => {
      dispatch(setUserProfile(profile));
    },
    getUserProfile:(profile) => {
      dispatch(getUserProfile(profile))
    }
  };
};
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MainContainer));
