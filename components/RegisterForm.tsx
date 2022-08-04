import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';


const addHeartUser = async () => {

  const newUser = {
    email: `nico@example.com`,
    password: `passmeoutside`,
    name: `Nico`,
    color: `#a93083`,
    heartCount: `4`
  }

  try{
    const res = await fetch('/api/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(newUser)
    })

    const data = await res.json()
    // console.log(data)
    
  } catch (err){
    console.error(err)
  }
}



export const RegisterForm = () => {

  const RegisterUser = async (values: object) => {
    console.log(values);
    try{
      const res = await fetch('/api/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
  
        body: JSON.stringify(values)
      })
  
      const data = await res.json()
      // console.log(data)
      
    } catch (err){
      console.error(err)
    }
    
  }

  const RegisterSchema = Yup.object().shape({

    name: Yup.string().required('* required'),
    email: Yup.string().required('* required').email(), 
    password: Yup.string().required('* required'),

  })

  return (
    <div className='login-cont'>
      <h2>Register</h2>

      <Formik
        initialValues={{ name: "", email: "", password: ""}}
        validationSchema={RegisterSchema}
        validateOnChange={false} // disable on every keystroke
        onSubmit={(values, actions) => {
          // alert(JSON.stringify(values, null, 2))
          RegisterUser(values)
          actions.resetForm()
        }}
      >
        {({ errors, touched }) => (
          <Form>

            <div className='form-item'>
              <Field name="name" type="text" placeholder="username..." className='email'/>
              {errors.name && touched.name ? (
                <span className='formErr'>{errors.name}</span>
                ) : null}
            </div>

            <div className='form-item'>
              <Field name="email" type="text" placeholder="email..." className='email'/>
              {errors.email && touched.email ? (
                <span className='formErr'>{errors.email}</span>
                ) : null}
            </div>

            <div className='form-item'>
              <Field name="password" type="password" placeholder="password..." className='password'/>
              {errors.password && touched.password ? (
                <span className='formErr'>{errors.password}</span>
                ) : null}
            </div>

            <button className='submitPost' type='submit'> Sign Up </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
