import styled from "styled-components"
import { MdAdd } from "react-icons/md";
import { NoteForm } from "../components/Todos/NoteForm";
import { Note, Todo } from "../types/types";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { TodoForm } from "../components/Todos/TodoForm";
import { MdDelete } from "react-icons/md";
import { NoteItem } from "../components/Todos/NoteItem";
import Image from "next/image";

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
        {notesState.filter(note => note.status === 'current').map(note => (
          <li key={note._id}>
            <NoteItem {...note} />
          </li>
        ))}
        <li>
          <NoteForm refetchData={getAll}/>
        </li>
        {/* <li>
          <div className="note-create">

            <button className="create" aria-label="create note"> <MdAdd /> </button>
          </div>
        </li> */}
      </ul>

      <h2> Completed </h2>
      <ul className="notes completed">
        {notesState.filter(note => note.status === 'completed').map(note => (
          <li key={note._id}>
            <NoteItem {...note} />
          </li>
        ))}
      </ul>

      <h2> Trash </h2>
      <ul className="notes trash">
        {notesState.filter(note => note.status === 'trash').map(note => (
          <li key={note._id}>
            <NoteItem {...note} />
          </li>
        ))}
      </ul>

      <div className="bg">
        <figure className="right bush">
          <Image src={`/assets/pikmin/bush-1-2x.webp`} alt="background image" height={100} width={200}/>
        </figure>
        <figure className="left bush">
          <Image src={`/assets/pikmin/bush-1-2x.webp`} alt="background image" height={100} width={200}/>
        </figure>

        <figure className="pikmin one">
          <Image src={`/assets/pikmin/blue-1.webp`} alt="background image" height={150} width={130}/>
        </figure>

        <figure className="pikmin two">
          <Image src={`/assets/pikmin/red-1.webp`} alt="background image" height={150} width={100}/>
        </figure>

        <figure className="pikmin three">
          <Image src={`/assets/pikmin/yellow-1.webp`} alt="background image" height={150} width={100}/>
        </figure>
        <figure className="pikmin four">
          <Image src={`/assets/pikmin/pink-1.webp`} alt="background image" height={150} width={130}/>
        </figure>
      </div>

      <div className="fg">
        <figure className="right flower">
          <Image src={`/assets/pikmin/daisy-right-medium-up.webp`} alt="background image" height={200} width={200}/>
        </figure>

        <figure className="left flower">
          <Image src={`/assets/pikmin/daisy-left-medium-up.webp`} alt="background image" height={200} width={200}/>
        </figure>
      </div>
    </StyledNotesPage>
  </>)
}

const StyledNotesPage = styled.div`

  position: relative;

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

  .bg, .fg{
    position: fixed;
    /* object-fit: cover; */
    
    /* width: 100%;
    height: 100%; */
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;

    figure{
      margin: 0;
    }
    
  }
  .bg{
    pointer-events: none;
    z-index: -10;
  }

  .fg{
    pointer-events: none;
    z-index: 10;    
  }

  .flower, .bush, .pikmin{
    position: absolute;
  }

  .flower{
    bottom: -10px;
  }

  .bush{
    top: -10px;
    filter: blur(.8px);
  }

  .right{
    right: 0;
  }
  .left{
    left: 0;
  }

  .pikmin{
    bottom: 0;
    
    &.one{
      left: 10%;
    }
    &.two{
      left: 25%;
    }
    &.three{
      right: 20%;
    }
    &.four{
      right: 35%;
    }
  }


`