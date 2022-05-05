import React from "react";
import {Navigate} from "react-router-dom"
import { connect } from "react-redux";
import {
   useLocation,
   useNavigate,
   useParams,
 } from "react-router-dom";

 
let mapStateToPropsForRedirect = (state) => {
   return {
     isAuth: state.auth.isAuth,
   }
 }

 function withRouter(Component) {
   function ComponentWithRouterProp(props) {
     let location = useLocation();
     let navigate = useNavigate();
     let params = useParams();
     return <Component {...props} router={{ location, navigate, params }} />;
   }
   return ComponentWithRouterProp;
 }
export const withAuthRedirect = (Component) => {
   class RedirectComponent extends React.Component {
      render() {
         if (!this.props.isAuth) {
            return <Navigate to= {"/Login"}/>
         }
         return <Component {...this.props}/>
      }
   }
   
    let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(withRouter(RedirectComponent))



   return ConnectAuthRedirectComponent
}