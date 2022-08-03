import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

import { StyledNavBar } from '../styles/Navbar.styled'

export const Navbar = () => {


  //* RETURN * * * * * * * * *
  const { data: session, status } = useSession()


  return (

    <StyledNavBar>
      <div className="nav-bg-main">
        <nav className="main">
          <ul>
            <li key={1}> <Link href={`/`}       > Home </Link> </li>
            <li key={2}> <Link href={`/love`}   > Love </Link> </li>
            <li key={3}> <Link href={`/login`}  > Login </Link> </li>
          </ul>
        </nav>

      </div>
      

      <div className="nav-bg-sub">
        <nav className="sub">

        { session && (
          <>
            <a href={`/users/${session.user.email}`}> {session.user.name}</a>
            <Link href='/api/auth/signout' >
              <a onClick={e => {e.preventDefault(); signOut()}} className='btn' >Sign Out</a>
            </Link>
          </>
        )}

        { !session && (
          <>
            <Link href='/api/auth/signin' >
              <a onClick={e => {e.preventDefault(); signIn()}} className='btn' >Sign In</a>
            </Link>
          </>
        )}
        </nav>
      </div>
    </StyledNavBar>
  )
}
