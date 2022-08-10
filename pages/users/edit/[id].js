import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { FaRegTrashAlt, FaUserAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FcCancel } from 'react-icons/fc'
import { MdPassword } from 'react-icons/md'

// import {StyledPopUp} from '../styles/popup.styled'
import { StyledPost } from '../../../styles/Post.styled'
import { Loading } from "../../../components/Loading";



const ROLES = {
  'Admin': 5150,
  'Editor': 1984,
  'User': 2001,
}
export default function UserEditor() {

  const { query, isReady, push: routerPush } = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [userState, setuserState] = useState({name: 'no name...', password: 'no password...', roles: []});

  // TODO make this into helper function
  const getUserInfo = async () => {
    try {
      const res = await fetch(`/api/users/${query.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json();

      setuserState(data);
      setIsLoading(false)

    } catch (err) {
      console.error(err);

    }
    
  }

  const updateUser = async (values) => {

    //TODO you can spread ...values to make this way shorter
    let convertData = {
      _id: query.id,
      name: values.name,
      color: values.color,
      password: '',
      roles: {
        "User": 0,
        "Editor": 0,
        "Admin": 0
      }
    }
    values.admin            ? convertData.roles.Admin = ROLES.Admin   : convertData.roles.Admin = 0
    values.editor           ? convertData.roles.Editor = ROLES.Editor : convertData.roles.Editor = 0
    values.user             ? convertData.roles.User = ROLES.User     : convertData.roles.User = 0
    values.password !== ''  ? convertData.password = values.password : delete convertData.password

    try{

      const res = await fetch(`/api/users/${query.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json' },
  
        body: JSON.stringify({...convertData})
      })
  
      const data = await res.json()
      setIsLoading(true)
      routerPush('/admin') // navigate to /admin page


    } catch (err){
      console.error(err);
    }
  }

  useEffect(() => {
    if(!isReady) return

    getUserInfo()

  }, [isReady])


  const UserSchema = Yup.object().shape({

    name: Yup.string().required('* Name required!').min(3, '* Name too short!').max(10, '* Name too long!'),
    color: Yup.string().required('* Color required!'),
    password: Yup.string().min(8, 'Too Short!').max(50, 'Too Long!'),
    passwordConf: Yup.string().min(8, 'Too Short!').max(50, 'Too Long!'),

    admin: Yup.boolean(),
    editor: Yup.boolean(),
    user: Yup.boolean(),
    // TODO how to validate object?
    // roles: Yup.object()
    //   .required('* 1 role is required!')
  })

  const [isAreYouSure, setisAreYouSure] = useState(false)
  const toggleAreYouSure = () => {
    setisAreYouSure(prev => !prev)
  }

  return (

    <main className='mainBody'>
      {isLoading && (
        <Loading />
      )}

      {!isLoading && (
        <section>
        <h2>Edit this User</h2>  
        <Formik
          enableReinitialize
          initialValues={{ 
            name: userState.name || 'undefined', 
            color: userState.color || 'undefined', 
            password: '', 
            passwordConf:'', 
            admin: userState.roles?.Admin === ROLES.Admin ? true : false  || false,
            editor: userState.roles?.Editor === ROLES.Editor ? true : false || false,
            user: userState.roles?.User === ROLES.User ? true : false || false,
          }}
          validationSchema={UserSchema}
          validateOnChange={false} // disable on every keystroke
          onSubmit={(values, actions) => {
            // alert(JSON.stringify(values, null, 2))
            updateUser(values)
            actions.resetForm()
          }}
        >
          {({ errors, touched, values }) => (
            <>
            <main className="mainBody">

              <StyledPost>

                <Form>
                  <p><HiOutlineMail/> {userState.email}</p>

                  <div className='form-item'>
                    <FaUserAlt />
                    <Field name="name" type="text" placeholder="name..." className='author'/>
                    {errors.name && touched.name ? (
                      <span className='formErr'>{errors.name}</span>
                      ) : null}
                  </div>

                  <div className='form-item'>
                    <FaUserAlt />
                    <Field name="color" type="color"  className='color'/>
                    {errors.color && touched.color ? (
                      <span className='formErr'>{errors.color}</span>
                      ) : null}
                  </div>
                  <br/>

                  <div className='changepassword'>
                    <h3>Change Password</h3>
                    <div className='form-item'>
                      <MdPassword className='ico'/>
                      <Field name="password" type="password" placeholder="password..." className='author' autoComplete="off"/>
                      {errors.password && touched.password ? (
                        <span className='formErr'>{errors.password}</span>
                        ) : null}
                    </div>
                    <div className='form-item'>
                    <MdPassword className='ico'/>
                      <Field name="passwordConf" type="password" placeholder="confirm password..." className='author' autoComplete="off"/>
                      {errors.passwordConf && touched.passwordConf ? (
                        <span className='formErr'>{errors.passwordConf}</span>
                        ) : null}
                    </div>
                  </div>
                  <br/>

                  <div className='form-item'>
                    <Field type="checkbox" name="admin"/> Admin <br/>
                    <Field type="checkbox" name="editor" /> Editor <br/> 
                    <Field type="checkbox" name="user" /> User <br/> 
                    {/* <Field type="checkbox" name="checked" value="User" /> User <br/> */}
                    {errors.roles && touched.roles ? (
                      <span className='formErr'>{errors.roles}</span>
                      ) : null}
                  </div>
                  
                    <div className='editBtns'>
                      <button className='submitPost' type='submit'>Update User</button>
                      <button className='deleteBtn' type='button' onClick={() => routerPush('/admin')}> <FcCancel /> </button>
                    </div>
                </Form>

              </StyledPost>
            </main>
            </>
            )}
        </Formik>
        </section>
      )}
    </main>
  )
}