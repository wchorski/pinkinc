import React from 'react'
import {Navbar} from '../components/Navbar'
import { UserTable } from '../components/UserTable'

export default function admin() {
  return (
    <>
      <Navbar />
      <main className='mainBody'>
        <h1>Admin page</h1>

        <section>
          <UserTable />
        </section>
      </main>
    </>
  )
}
