import React, {useState, useEffect, useMemo} from 'react'
import Link from 'next/link'
import { useTable, useSortBy } from 'react-table'
import { FaSortAmountUp,  FaSortAmountDownAlt} from 'react-icons/fa'

import { StyledGigTable } from '../styles/GigTable.styled'



export const UserTable = ( {} ) => {


  const controller = new AbortController();
  const [usersState, setusersState] = useState([]);

  const getAllUsers = async () => {
    try{
      const res = await fetch(`/api/users/getall`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
			const data = await res.json();

      const destAry = destructArray(data)
      setusersState(destAry)

			// console.log(data);

    } catch (err){
      console.error(err)
    }
  }

  const destructArray = (array) => {
    // TODO destruct array.push prettied objects back to array
    let prettyArr = []
    
    array.map(user => {
      // TODO remove this and just use json delete / parse
      let prettyUser = {
        email: user.email,
        username: user.username,
        roles: whatRole(user),
        _id: user._id,
        account: <Link href={`/users/${user._id}`}> account </Link> 
      }
      prettyArr.push(prettyUser)
    })

    return prettyArr
  }

  const whatRole = (obj) => {

    const {roles: { Admin, Editor, User }} = obj 
    if(Admin){
      return 'Admin';

    } else if(Editor){
      return 'Editor';

    } else if(User){
      return 'User';

    } else {
      return 'this user is a NOBODY';
    }  
  }

  useEffect(() => {
    getAllUsers()

    return () => {
      console.log('return');
    }
  }, [])

  //? TABLE #################################
  //? TABLE #################################
  //? TABLE #################################
  const usersColumns = [
    {
      Header: 'Email',
      Footer: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Username',
      Footer: 'Username',
      accessor: 'username',
    },
    {
      Header: 'Role',
      Footer: 'Role',
      accessor: 'roles',
    },
    {
      Header: 'ID',
      Footer: 'ID',
      accessor: '_id',
    },
    {
      Header: '',
      Footer: '',
      accessor: 'account',
    },
  ]

  const newColumns = useMemo(() => usersColumns, []) //* useMemo stops render on every refresh. performant
  // const newData    = useMemo( () => usersArray, [] ) //* idk skipping this for now

  const tableInstance = useTable({
    columns: newColumns,
    data: usersState

  }, useSortBy)
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups } = tableInstance

  return (

    <StyledGigTable>

      <div className="postTable">

        <table {...getTableProps()}>

          <thead>
            {headerGroups.map((headGrp, i) => (
              <tr {...headGrp.getHeaderGroupProps()} key={i} className='header'>
                {headGrp.headers.map((column, i) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())} key={i}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? <FaSortAmountUp />  : <FaSortAmountDownAlt />) : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} key={i}>
                  {row.cells.map(cell => {

                    return (
                      <td {...cell.getCellProps()}> {cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>

          <tfoot>
            {footerGroups.map(footerGrp => (
              <tr {...footerGrp.getFooterGroupProps()}>
                {footerGrp.headers.map((column, i) => (
                  <td {...column.getFooterProps} key={i}>
                    {column.render('Footer')}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>

        </table>

      </div>
    </StyledGigTable>
  )
}
