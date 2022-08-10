import React from 'react'
import { useSession, getSession, signIn, signOut } from "next-auth/react"
import ROLES_LIST from '../config/roles_list'
import { useRouter } from "next/router";
import Link from 'next/link'
import LinkActive from './LinkActive'

import { BsEmojiHeartEyes } from 'react-icons/bs'

import { StyledNavBar } from '../styles/Navbar.styled'

// export async function getServerSideProps(ctx: any) {
//   const session = await getSession(ctx)
//   return ({ props: { session } })
// }

export const Navbar = () => {

  //* RETURN * * * * * * * * *
  const { data: session, status } = useSession()
  const { pathname: urlPathname } = useRouter();

  const highlight = {
    backgroundColor: urlPathname === '/admin' ? "var(--color-alt)" : ''
  }


  return (

    <StyledNavBar>
      <div className="nav-bg-main">
        <nav className="main">
          <ul>
            <li key={1}> <Link href={`/`}           > Home </Link> </li>
            <li key={5}> <LinkActive name={'HomeActive'} href={'/'}/></li>
            <li key={2}> 
              <LinkActive name={'LoveActive'} href={'/love'}/>
            </li>
            <li key={6}>
              <Link href={`/love`}> Love </Link> 
            </li>
            <li key={3}> <Link href={`/register`}   > register </Link> </li>

            {session && session.user.roles.admin === ROLES_LIST.admin && (
              <li key={4} style={highlight}> <Link href={`/admin`}      > Admin </Link> </li>
            )}

          </ul>
        </nav>


        <div className="nav-bg-sub">
          <nav className="sub">

            {session && status === "authenticated" && (
              <>
                <BsEmojiHeartEyes style={{ color: session.user?.color, fontSize: "30px" }} />
                <Link href={`/users/${session.user?.email}`}>{session.user?.name}</Link>
                <Link href='/api/auth/signout' >
                  <a onClick={e => { e.preventDefault(); signOut() }} className='btn' > Sign Out</a>
                </Link>
              </>
            )}

            {!session && status === "unauthenticated" && (
              <>
                <Link href='/api/auth/signin' >
                  <a onClick={e => { e.preventDefault(); signIn() }} className='btn' > Login </a>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>


    </StyledNavBar>
  )
}
