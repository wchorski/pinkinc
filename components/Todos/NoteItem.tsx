import styled from "styled-components"
import { TodoForm } from "./TodoForm"
import { Note, Todo } from "../../types/types"
import { useState } from "react"
import { MdCheck, MdDelete, MdRecycling } from "react-icons/md";
import Image from "next/image";

export function NoteItem(props:Note){
  
  const [thisState, setThisState] = useState<Note>(props)
  const [todosState, setTodosState] = useState<Todo[]>(props.todos)

  const {_id, title, color, type, todos, status} = thisState


  const handleTodoUpdate = async (e:any, message:string, isDelete?:boolean) => {
    // console.log(e.target.checked);
    
    let status = e.target.checked ? 'completed' : 'current'
    if(isDelete) status = 'delete'
    
    const valuesFormat:any = {
      todos: [{
        status,
        message,
      }]
    }
    // console.log(valuesFormat);
  
    try{
      const res = await fetch(`/api/notes/${_id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json' },
  
        body: JSON.stringify(valuesFormat)
      })
  
      const data:Note = await res.json()
      // console.log(data);
      setTodosState(data.todos)
      
    } catch (err){
      console.error(err);
    }
  }

  // const handleNoteUpdate = async (values:Note) => {
  const handleNoteUpdate = async (values:any) => {
    // console.log(e.target.checked);
    
    const valuesFormat:any = {
      status: values.status,
      todos: [],
    }
    // console.log(valuesFormat);
  
    try{
      const res = await fetch(`/api/notes/${_id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json' },
  
        body: JSON.stringify(valuesFormat)
      })
  
      const data:Note = await res.json()
      // console.log(data);
      setThisState(data)
      
    } catch (err){
      console.error(err);
    }
  }

  // const handleDeleteTodo = async (e:any, message:string) => {

  // }

  function randomLeftRight(){
    const dirs = ['left', 'right']
    const randomIndex = Math.floor(Math.random() * dirs.length);
    return dirs[randomIndex];
  }
  function randomTopBottom(){
    const dirs = ['top', 'bottom']
    const randomIndex = Math.floor(Math.random() * dirs.length);
    return dirs[randomIndex];
  }

  return(
    <StyledNote color={color} status={status}>
      <figure className={`pikmin ${randomLeftRight()} ${randomTopBottom()}`}>
        <Image src={`/assets/pikmin/${color}-1.webp`} alt="background image" height={90} width={70}/>
      </figure>

      <nav className="note-options">
        <span className="status">
          {status === 'completed' && (
            <MdCheck />
          )}
  
        </span>

        <button
          onClick={() => handleNoteUpdate({status: 'completed'})}
        > <MdCheck /> </button>

        {status !== 'trash' ? (
          <button
            onClick={() => handleNoteUpdate({status: 'trash'})}
          > <MdDelete /> </button>
        ):(
          <button
            onClick={() => handleNoteUpdate({status: 'current'})}
          > <MdRecycling /> </button>
        )}
      </nav>
      
      <h4 className="title"> {title} </h4>

      <ul className="todos">
        {todosState?.map((todo, i) => (
          <li key={i}>
            <input 
              type="checkbox" 
              defaultChecked={todo.status === 'completed' ? true : false}
              onClick={(e) => handleTodoUpdate(e, todo.message)}
            />
            <span className="message">{todo.message}</span>
            <button 
              className="delete"
              onClick={(e) => handleTodoUpdate(e, todo.message, true)}
            > <MdDelete /> </button>
          </li>
        ))}

        <li>
          <TodoForm id={_id} setTodosState={setTodosState}/>
        </li>
      </ul>
    </StyledNote>
  )
}

// type
// PIKMIN THEME
// gocery - chef kirby
// fun - pikachu innertube sunglasses
// chores - something sweeping floor?



const StyledNote = styled.article<{color:string, status:'current'|'completed'|'trash'|'delete'}>`
  
  background-color: white;
  background: ${p => `var(--cg-${p.color})`};

  padding: 1rem;
  border-radius: 5px;
  position: relative;
  opacity: ${p => p.status === 'trash' ? .3 : 1};

  nav.note-options{
    top: 0;
    right: 0;
    display: flex;
    width: 100%;
    position: absolute;

    .status{
      margin-right: auto;
      padding: 0 .5rem;

      svg{
        color: limegreen
      }
    }
  }

  .title{
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    mix-blend-mode: difference;
  }

  ul.todos{
    padding-left: 0;
    list-style: none;
    mix-blend-mode: difference;

    input[type='checkbox']{
      margin-right: .6rem;
    }

    li{
      margin-bottom: .4rem;
      display: flex;

      &:has(input:checked){
        .message{
          text-decoration: line-through;
          opacity: .5;
        }
      }

      button.delete{
        margin-left: auto;
      }
    }
  }

  .pikmin{
    margin: 0;
    position: absolute;
    z-index: -1;
  }

  .top{
    top: -3em;
  }
  .bottom{
    top: -3em;
  }
  .left{
    left: -2em;
  }
  .right{
    right: -2em;
  }
  
`