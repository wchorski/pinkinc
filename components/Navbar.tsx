import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

export const Navbar = () => {


  //* RETURN * * * * * * * * *
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )

  return (
    <div>
      <nav>
        <ul>
          <li> <Link href={`/`}       > Home </Link> </li>
          <li> <Link href={`/love`}   > Love </Link> </li>
          <li> <Link href={`/login`}  > Login </Link> </li>
        </ul>
      </nav>
    </div>
  )
}
