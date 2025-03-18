import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { BASE_URL } from '../../constants';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

 const SignUp = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={async(values) => {
        const response = await fetch(`${BASE_URL}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
            });

            const data = await response.json()
            console.log(data);
            
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="username" placeholder="username"/>
          {errors.username && touched.username ? (
            <div>{errors.username}</div>
          ) : null}
          <br />
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
);


export default SignUp