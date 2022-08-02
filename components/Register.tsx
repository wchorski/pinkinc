import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';

export const Register = () => {

  const loginUser = (values: object) => {
    console.log(values);
    
  }

  const LoginSchema = Yup.object().shape({

    username: Yup.string().required('* required'),
    email: Yup.string().required('* required').email(), 
    password: Yup.string().required('* required'),

  })

  return (
    <div className='login-cont'>
      <h2>Register</h2>

      <Formik
        initialValues={{ username: "", email: "", password: ""}}
        validationSchema={LoginSchema}
        validateOnChange={false} // disable on every keystroke
        onSubmit={(values, actions) => {
          // alert(JSON.stringify(values, null, 2))
          loginUser(values)
          actions.resetForm()
        }}
      >
        {({ errors, touched }) => (
          <Form>

            <div className='form-item'>
              <Field name="username" type="text" placeholder="username..." className='email'/>
              {errors.username && touched.username ? (
                <span className='formErr'>{errors.username}</span>
                ) : null}
            </div>

            <div className='form-item'>
              <Field name="email" type="text" placeholder="email..." className='email'/>
              {errors.email && touched.email ? (
                <span className='formErr'>{errors.email}</span>
                ) : null}
            </div>

            <div className='form-item'>
              <Field name="password" type="text" placeholder="password..." className='password'/>
              {errors.password && touched.password ? (
                <span className='formErr'>{errors.password}</span>
                ) : null}
            </div>

            <button className='submitPost' type='submit'> Login </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
