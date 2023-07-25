import styled from "styled-components"
import { MdAdd } from "react-icons/md";
import { NoteForm } from "../components/Todos/NoteForm";
import { Note, Todo } from "../types/types";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { TodoForm } from "../components/Todos/TodoForm";
import { MdDelete } from "react-icons/md";
import { NoteItem } from "../components/Todos/NoteItem";

type Props = {

}

export default function TodoPage() {

  // const notes:Note[] = [
  //   {
  //     id: '123',
  //     dateCreated: '2023-07-23',
  //     dateDue: '2023-07-23',
  //     title: 'DO THESE CHORES',
  //     color: 'blue',
  //     type: 'normal',
  //     todos: [
  //       {
  //         status: 'current',
  //         message: 'this is a message'
  //       },
  //       {
  //         status: 'current',
  //         message: 'bro did u read this?'
  //       },
  //       {
  //         status: 'completed',
  //         message: 'hahahahahh ok dude'
  //       },
  //     ]
  //   },
  //   {
  //     id: '124',
  //     dateCreated: '2023-07-23',
  //     dateDue: '2023-07-23',
  //     title: 'Bake that bread Bake that bread Bake that bread Bake that bread Bake that bread Bake that bread Bake that bread Bake that bread',
  //     color: 'yellow',
  //     type: 'normal',
  //     todos: [
  //       {
  //         status: 'current',
  //         message: 'this is a message'
  //       },
  //       {
  //         status: 'current',
  //         message: 'bro did u read this?'
  //       },
  //       {
  //         status: 'completed',
  //         message: 'hahahahahh ok dude'
  //       },
  //     ]
  //   },
  //   {
  //     id: '126',
  //     dateCreated: '2023-07-23',
  //     dateDue: '2023-07-23',
  //     title: 'get this guap',
  //     color: 'red',
  //     type: 'normal',
  //     todos: [
  //       {
  //         status: 'current',
  //         message: 'this is a message'
  //       },
  //       {
  //         status: 'current',
  //         message: 'bro did u read this? bro did u read this? bro did u read this? bro did u read this? bro did u read this? bro did u read this? bro did u read this? bro did u read this?'
  //       },
  //       {
  //         status: 'completed',
  //         message: 'hahahahahh ok dude'
  //       },
  //     ]
  //   },
  // ]

  const [notesState, setNotesState] = useState<Note[]>([])

  const getAll = async () => {
    try{
      const res = await fetch(`/api/notes/getall`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });
			const data = await res.json();

      // const destAry = destructArray(data)
      // setusersState(destAry)
      // setIsLoading(false)
			// console.log(data);
      setNotesState(data)

    } catch (err){
      console.error(err)
    }
  }

  useEffect(() => {
    getAll()
  
    // return () => 
  }, [])
  

  return (<>
    <StyledNotesPage>
      <ul className="notes">
        {notesState.map(note => (
          <li key={note._id}>
            <NoteItem {...note} />
          </li>
        ))}
        <li>
          <NoteForm refetchData={getAll}/>
        </li>
        <li>
          <div className="note-create">

            <button className="create" aria-label="create note"> <MdAdd /> </button>
          </div>
        </li>
      </ul>
    </StyledNotesPage>
  </>)
}

const StyledNotesPage = styled.ul`

  ul.notes{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
    margin: 1rem;
  
    li{
      max-width: 20em;
    }
  }

  .note-create{
    position: relative;
    border: dashed 1px white;
    width: 10em;
    height: 10em;

    button.create{
      padding: .5rem;
      border-radius: 50%;
      border: white solid 2px;
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      background-color: #81d581;
  
      svg{
        font-size: 3rem;
        
      }
  
      &:hover, &:focus{
        background-color: white;
        color: green;
        border: green solid 2px;
      }
      
      &:active{
        background-color: #999999;
  
      }
    }
  }


`