import React, { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { BASE_URL } from '../../constants';
import { AuthContext } from '../../context/authContext';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

 const Login = () => {

    const {setToken} = useContext(AuthContext)
    const nav = useNavigate()
    return (
        <div>
        <h1>Login</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
         onSubmit={async(values) => {
                const response = await fetch(`${BASE_URL}/login`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                    });
        
                    const {token} = await response.json()
                    setToken(token)
                    localStorage.setItem("token", token)
                    nav('/')
                    
              }}

        >
          {({ errors, touched }) => (
            <Form>
              <Field name="email" type="email" placeholder="email"/>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <br />
              <Field name="password" type="password" placeholder="password"/>
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <br />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    )
 }


export default Login