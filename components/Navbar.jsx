import React from 'react'
import { useSession, getSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

import { BsEmojiHeartEyes } from 'react-icons/bs'

import { StyledNavBar } from '../styles/Navbar.styled'

// export async function getServerSideProps(ctx: any) {
//   const session = await getSession(ctx)
//   return ({ props: { session } })
// }

export const Navbar = () => {

  //* RETURN * * * * * * * * *
  const { data: session, status } = useSession()
  // const { data: status } = useSession()


  return (

    <StyledNavBar>
      <div className="nav-bg-main">
        <nav className="main">
          <ul>
            <li key={1}> <Link href={`/`}           > Home </Link> </li>
            <li key={2}> <Link href={`/love`}       > Love </Link> </li>
            <li key={3}> <Link href={`/register`}   > register </Link> </li>
          </ul>
        </nav>

      </div>


      <div className="nav-bg-sub">
        <nav className="sub">

          {session && status === "authenticated" && (
            <>
              <BsEmojiHeartEyes style={{ color: session.user?.color, fontSize: "30px" }} />
              <Link href={`/users/${session.user?.email}`}>{session.user?.name}</Link>
              <Link href='/api/auth/signout' >
                <a onClick={e => { e.preventDefault(); signOut() }} className='btn' >Sign Out</a>
              </Link>
            </>
          )}

          {!session && status === "unauthenticated" && (
            <>
              <Link href='/api/auth/signin' >
                <a onClick={e => { e.preventDefault(); signIn() }} className='btn' >Sign In</a>
              </Link>
            </>
          )}
        </nav>
      </div>
    </StyledNavBar>
  )
}
