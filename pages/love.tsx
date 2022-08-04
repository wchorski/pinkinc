/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
*/
import connectDB from '../db/connection'
import User from '../models/User'


import React, {useEffect, useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import {AiOutlineHeart} from 'react-icons/ai'
import {RiHeartAddLine} from 'react-icons/ri'

import { Icon }       from '../components/Icon'
import { Navbar }     from '../components/Navbar'
import { Login }      from '../components/Login'
import { Register }   from '../components/Register'
import { HeartChart } from '../components/HeartChart.js'



export const getServerSideProps = async () => {

  try{
    await connectDB()
  
    // console.log('-- fetch Heart --')
    const hearts = await User.find()
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

  const { data: session, status } = useSession()
  // console.log(session, status);

  const [heartsState, setheartsState] = useState([])
  const [usersState, setusersState] = useState([])
  const [heartsCount, setheartsCount] = useState(0)
  const [playerHeartCount, setplayerHeartCount] = useState(0)

  const filterPlayerOne = (users: object[], id: string) => {
    const filteredArray = users.filter(user => user._id === id)

    const playerOne = filteredArray[0]

    console.log(playerOne);
    
    setplayerHeartCount(playerOne.heartCount)
    
    return playerOne
  }

  const addHeartIcon = async (color: string) => {
    // setheartsCount(prev => ++prev)
    // setheartsState(prev => [<AiOutlineHeart />, ...prev])
    setheartsState((prev) => [<Icon color={color} />, ...prev])
  }

  const updateUsersHearts = async (heartsCount: number) => {

    setplayerHeartCount(prev => ++prev)
    // console.log(playerHeartCount);
  

    const res = await fetch(`/api/users/${session.user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        heartCount: playerHeartCount,
        _id: session.user.id
      })
    })

    const data = await res.json()
    // console.log(data)
  }



  const getHeartIcons = () => {
    usersState.map(usr => {
      for(let i = 0; i <= usr.heartCount; i++){
        addHeartIcon(usr.color)
      }
    })
  }

  const getTotalHearts = () => {
    usersState.map(usr => {
      setheartsCount(prev => prev + usr.heartCount)
    })
  }


  useEffect(() => {
    const array = JSON.parse(hearts);
    setusersState(array)

  
    return () => {
      console.log('return');
      
    }
  }, [])

  useEffect(() => {
    // getHeartIcons()
    getTotalHearts()
  
    return () => {
      console.log('return');
    }
  }, [usersState])

  useEffect(() => {
    if(session){
      setplayerHeartCount(session.user.heartCount)
      // console.log(session.user);
      
      filterPlayerOne(usersState, session.user.id)
      
    }
  
    return () => {
      console.log('return');
    }
  }, [session])
  

  return (
    <>
      <Navbar />
      {/* <Login /> */}
      {/* <Register /> */}
      
      {/* <h1>Love</h1>

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
      </div> */}


      {session && (
        <>
          {/* <button onClick={addHeartUser}>new User</button> */}
          <h2><Icon color={session.user.color}/> {playerHeartCount}</h2>


          <div className="scoreboard">
            {usersState.map(usr => (
              <div className='user' key={usr._id}>
                <h3 style={{marginRight: "1em"}}>{usr.name}</h3> <span>{usr.heartCount}</span>
              </div>
            ))}
          </div>

          <div className="heart-cont">
            <HeartChart importData={usersState}/>

            <button 
              onClick={e => updateUsersHearts(session.user.color)} 
              className="btn-heart"
              aria-label="Add 1 Heart"
            > 
              <RiHeartAddLine />
            </button>

          </div>

          <h2>{heartsCount} total hearts </h2>


          {/* <div className="hearts-cont">
            {heartsState}
          </div> */}
        </>
      )}

      {status === "loading" && (
        <h3>Loading...</h3>
      )}

      {!session && status === "unauthenticated" &&(
        <>
          <h2> *Must be logged in to add Love* </h2>
        </>
      )}

    </>
  )
}


