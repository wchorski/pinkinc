import React from 'react'

import { StyledGigTable } from '../styles/GigTable.styled'
import { Navbar } from './Navbar'


export const UserSingle = (props) => {

  // const {_id, date, color, name, message, getForms, clsNms='card'} = props

  return (
    <>
      <StyledGigTable>
        <div className="clientInfo">
          <table>
            <tbody>
              <tr>
                <th>email:</th>
                <td>{props.email}</td>
              </tr>
              <tr>
                <th>Username:</th>
                <td>{props.name}</td>
              </tr>
              <tr>
                <th>Role(s):</th>
                <td>
                  {props.roles.Admin ? 'Admin, ' : ''} 
                  {props.roles.Editor ? 'Editor, ' : ''}
                  {props.roles.User ? 'User ' : ''}
                </td>
              </tr>
              <tr>
                <th>ID:</th>
                <td>{props._id}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </StyledGigTable>
    </>
  )
}
