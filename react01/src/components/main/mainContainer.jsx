import React from "react";
import Main from "./main";
import * as axios from "axios";
import { connect } from "react-redux";
import { getUserProfile, setUserProfile,getUserStatus,upDateUserStatus } from "../../redax/profileReduce";
import {
  useLocation,
  useNavigate,
  useParams,
  // Navigate,
} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect"
import { compose } from "redux";
class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {

    let userId = this.props.router.params.userId;
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId)
  }

  
  render() {
    
    return <Main {...this.props} profile={this.props.profile} status={this.props.status} upDateStatus={this.props.upDateUserStatus}/>;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status:state.profilePage.status
  };
};
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
const mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (profile) => {
      dispatch(setUserProfile(profile));
    },
    getUserProfile: (profile) => {
      dispatch(getUserProfile(profile));
    },
    getUserStatus: (userId) => {
      dispatch(getUserStatus(userId))
    },
    upDateUserStatus:(status) => {
      dispatch(upDateUserStatus(status))
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

export default compose(connect(
  mapStateToProps,
  mapDispatchToProps
),withRouter,withAuthRedirect)(MainContainer)
