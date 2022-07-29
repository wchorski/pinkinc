import React from 'react'
import Link from 'next/link'

export const Navbar = () => {

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
