import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import { FaTrashAlt, FaSkullCrossbones, FaEject, FaUserEdit } from 'react-icons/fa'

import { UserSingle } from '../../components/UserSingle'
import { Navbar } from "../../components/Navbar";

export default function UserById() {

  const { query, isReady } = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [userState, setuserState] = useState({username: "NoName"});


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

  const [isAreYouSure, setisAreYouSure] = useState(false)
  const toggleAreYouSure = () => {
    setisAreYouSure(prev => !prev)
  }

  useEffect(() => {
    if(!isReady) return

    getUserInfo()

  }, [isReady])

  const deleteUser = async (_id) => {
    try {
      const res = await fetch(`/users/${query.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

    } catch (err) {
      console.error(err)
    }
  }

  return (

    <>
      <Navbar />

      <main className='mainBody'>
        <section>
          <div className="editBtns">
            <button className='deleteBtn btn' onClick={() => toggleAreYouSure()}> <FaTrashAlt /> </button>
            <Link href={`/users/edit/${query.id}`} className='editMe btn'>
              <a><FaUserEdit /></a>
            </Link>
          </div>

          {isAreYouSure && (
            <StyledPopUp>
              <h3>Delete User</h3>
              <button className='editBtn' onClick={() => deleteUser(_id)}> yes I'm sure <FaSkullCrossbones /> </button>
              <button className='editBtn' onClick={() => toggleAreYouSure()}> no, take me back <FaEject /> </button>
            </StyledPopUp>
          )}

          {isLoading && (
            <h3>loading...</h3>
          )}

          {!isLoading && (
            <UserSingle {...userState} />
          )}

        </section>
      </main>
    </>
  )
}
