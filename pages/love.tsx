/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
*/
import connectDB from '../db/connection'
import Heart from '../models/heartModel'


import React, {useEffect, useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import {AiOutlineHeart} from 'react-icons/ai'

import {Icon} from '../components/Icon'
import { Navbar }   from '../components/Navbar'
import { Login }    from '../components/Login'
import { Register } from '../components/Register'



export const getServerSideProps = async () => {

  try{
    await connectDB()
  
    // console.log('-- fetch Heart --')
    const hearts = await Heart.find()
    // console.log('-- -- -- -- -- -- ')
    // console.log(hearts);


    return{
      props: { hearts: JSON.stringify(hearts) }
      // props: { hearts }
    }

  } catch (err){
    console.error(err)
    return{
      notFound: true
    }
  }
}



export default function Love( { hearts } ) {

  const [heartsState, setheartsState] = useState([<AiOutlineHeart/>])
  const [usersState, setusersState] = useState([])
  const [heartsCount, setheartsCount] = useState(0)

  const addHeart = async (color: string) => {
    setheartsCount(prev => ++prev)
    // setheartsState(prev => [<AiOutlineHeart />, ...prev])
    setheartsState(prev => [<Icon color={color}/>, ...prev])
  }

  const updateHeart = async () => {
    const res = await fetch('/api/heart/add', {
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({name: 'newname'})
    })
  }

  const addHeartUser = async () => {

    const newUser = {
      name: `Will`,
      color: `#30a977`,
      count: `46`
    }

    try{
      const res = await fetch('/api/heart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
  
        body: JSON.stringify(newUser)
      })

      const data = await res.json()
      console.log(data)
      
    } catch (err){
      console.error(err)
    }
  }

  // const totalHeartsCount = () => {
  //   usersState.map(usr => {
  //     setheartsCount(prev => prev + usr.count)
  //   })
  // }

  const getHearts = () => {
    usersState.map(usr => {
      for(let i = 0; i <= usr.count; i++){
        addHeart(usr.color)
      }
    })
  }


  useEffect(() => {
    const array = JSON.parse(hearts);
    setusersState(array)
    // totalHeartsCount()
  
    return () => {
      console.log('return');
      
    }
  }, [])

  useEffect(() => {
    // totalHeartsCount()
    getHearts()
  
    return () => {
      console.log('return');
    }
  }, [usersState])
  

  return (
    <>
      <Navbar />
      <Login />
      <Register />
      
      <h1>Love</h1>

      <div className="haiku">
        <p>
          Friends forever in time 
        </p>
        <p>
          Bonded by our hearts and souls
        </p>
        <p>
          Love forever lasting!
        </p>
        <a href="https://www.familyfriendpoems.com/collection/love-haiku-poems/">- Sandy Maloof </a>
      </div>

      <button onClick={addHeartUser}>new User</button>

      <div className="users">
        {usersState.map((user: object) => (
          <div className="user" style={{backgroundColor: `${user.color}`}} key={user._id}>
            <h5>{user.name}</h5>
            <p>{user.count}</p>
          </div>
          
        ))}
      </div>



      <h2>{heartsCount}</h2>
      <button onClick={e => addHeart('#ff00a5')}>+ Add</button>


      <div className="hearts-cont">
        <p>{heartsState}</p>
      </div>

    </>
  )
}


