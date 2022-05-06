import React from "react"
import { Field, reduxForm } from 'redux-form'

 const LoginForm = (props) => {
   return(
         <form>
            <Field placeholder="Login" component={"input"}/>
            <Field placeholder="Password"component={"input"}/>
            <Field type={"checkbox"} component={"input"}/> Remember me
            <button>Login</button>
         </form>
   )
}
const ReduxLoginForm = () => {
  return( 
     reduxForm({
      // a unique name for the form
      form: 'login'
    })(LoginForm)
  )
}

const Login = (props) => {
   return(
      <div>
         <h1>Login</h1>
         <ReduxLoginForm/>
      </div>
   )
}


export default Login