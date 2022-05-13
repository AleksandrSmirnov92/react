import React from "react"
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {connect} from "react-redux"
import {LoginUser} from "../redax/AuthReducer"
import { Navigate } from "react-router-dom";

// import { Field, reduxForm } from 'redux-form'

//  const LoginForm = (props) => {
//    return(
//          <form>
//             <Field placeholder="Login" component={"input"}/>
//             <Field placeholder="Password"component={"input"}/>
//             <Field type={"checkbox"} component={"input"}/> Remember me
//             <button>Login</button>
//          </form>
//    )
// }
// const ReduxLoginForm = () => {
//   return( 
//      reduxForm({
//       // a unique name for the form
//       form: 'login'
//     })(LoginForm)
//   )
// }

// const Login = (props) => {
//    return(
//       <div>
//          <h1>Login</h1>
//          <ReduxLoginForm/>
//       </div>
//    )
// }
const validateLoginForm = values => {
   const errors = {};
   if (!values.email) {
      errors.email = 'Required 1';
   } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test( values.email )
   ) {
      errors.email = 'Invalid email address';
   }
   return errors;
};

const validationSchemaLoginForm = Yup.object().shape( {

   password: Yup.string()
      .min( 2, "Must be longer than 2 characters" )
      .max( 20, "Must be shorter than 20 characters" )
      .required( "Required 2" )
} );


const Login = (props) => {
   if (props.isAuth) {
      return (
         <Navigate to="/main"/>
      )
   }
   return (
      <div>
         <h2> ... Login 555 </h2>
         
         <Formik
            initialValues={{
               email: "",
               password: "",
               rememberMe: false
            }}
            validate={validateLoginForm}
            validationSchema={validationSchemaLoginForm}
            onSubmit={(values,{setSubmitting}) => {
               // console.log(JSON.stringify(values, null, 2) )
               // alert(JSON.stringify(values, null, 2))
               setTimeout ( ( ) => {  
                  // alert(JSON.stringify ( values , null , 2 ) ) 
                  props.LoginUser(values.email,values.password,values.rememberMe) ;
                  setSubmitting ( false ) ;
                } , 400 ) ; 

            }}
         >
            
            {() => (
               <Form>
                  
                  <div>
                     <Field
                        name={'email'}
                        type={'text'}
                        placeholder={'e-mail'} />
                  </div>
                  <ErrorMessage name="email" component="div" />

                  <div>
                     <Field
                        name={'password'}
                        type={'password'}
                        placeholder={'password'} />
                  </div>
                  <ErrorMessage name="password" component="div" />

                  <div>
                     <Field
                        type={'checkbox'}
                        name={'rememberMe'}
                        id='rememberMe' />
                     <label htmlFor={'rememberMe'}> remember me </label>
                  </div>

                  <button  type={'Submit'}>Login</button>
               </Form>
            )}
         </Formik>

         <div>
            ...
         </div>

      </div>
   )
}
const mapStateToProps = (state) => {
   debugger
   return{
      isAuth:state.auth.isAuth
   }
}
export default connect(mapStateToProps, {LoginUser}) (Login)