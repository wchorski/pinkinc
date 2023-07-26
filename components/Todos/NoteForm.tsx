import styled from "styled-components"
import { InputObj, Note } from "../../types/types"
import { FormEvent } from "react"
import useForm2 from "../../lib/useForm2"
import { FormInput } from "../elements/FormInput"
import { MdAdd } from "react-icons/md";

type Props = {
  refetchData: any,
}

export function NoteForm({refetchData}:Props) {

  const inputs:InputObj[] = [
    {
      name: 'title',
      type: 'text',
      placeholder: 'my note title...', 
      label: 'title',
      errorMessage: 'title name error',
      required: true,
      initial: '',
      pattern: '[a-zA-Z0-9 ]+',
      // disabled:true,
    },
    {
      name: 'color',
      type: 'color',
      placeholder: '', 
      label: 'color',
      errorMessage: 'color error',
      required: true,
      initial: 'pink',
      // disabled:true,
    },
    {
      name: 'dateDue',
      type: 'date',
      placeholder: '', 
      label: 'Due Date',
      errorMessage: 'dateDue error',
      required: true,
      // initial: status|| '',
      // disabled:true,
    },
    {
      name: 'type',
      type: 'text',
      placeholder: '', 
      label: 'type',
      errorMessage: 'type error',
      required: true,
      initial: 'normal',
      // disabled:true,
    },
  ]

  const {values, setValues, handleFindProps, handleChange, clearForm, resetForm } = useForm2(inputs)

  const handleSubmit = async (e:FormEvent) => {
    // console.log(values);
    e.preventDefault()

    try {
      const res = await fetch('/api/notes/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(values)
      })

      const data = await res.json()
      console.log(data)
      refetchData()
      resetForm()
      // signIn('yourProviderHere', { callbackUrl: '/love' })

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <StyledTodoForm onSubmit={handleSubmit} color={values.color}>

      <legend>Create Note</legend>

      <fieldset>
        <br />
        <FormInput 
          {...handleFindProps('title')}
          value={values['title']}
          onChange={handleChange}
        />
        <br/>
        {/* <FormInput 
          {...handleFindProps('color')}
          value={values['color']}
          onChange={handleChange}
        /> */}
        <ul className="colors">
          <li>
            <button
              type="button" 
              onClick={() => setValues((prev:any) => ({...prev, color: 'red'}))}
              className="red"
            > 
              red 
            </button>
          </li>
          <li>
            <button
              type="button" 
              onClick={() => setValues((prev:any) => ({...prev, color: 'blue'}))}
              className="blue"
            > 
              blue 
            </button>
          </li>
          <li>
            <button
              type="button" 
              onClick={() => setValues((prev:any) => ({...prev, color: 'yellow'}))}
              className="yellow"
            > 
              yellow 
            </button>
          </li>
          <li>
            <button 
              type="button"
              onClick={() => setValues((prev:any) => ({...prev, color: 'pink'}))}
              className="pink"
            >
                pink 
            </button>
          </li>
          <li>
            <button 
              type="button"
              onClick={() => setValues((prev:any) => ({...prev, color: 'white'}))}
              className="white"
            >
                white 
            </button>
          </li>
          <li>
            <button 
              type="button"
              onClick={() => setValues((prev:any) => ({...prev, color: 'purple'}))}
              className="purple"
            >
                purple 
            </button>
          </li>
          <li>
            <button 
              type="button"
              onClick={() => setValues((prev:any) => ({...prev, color: 'cyan'}))}
              className="cyan"
            >
                cyan 
            </button>
          </li>
          <li>
            <button 
              type="button"
              onClick={() => setValues((prev:any) => ({...prev, color: 'green'}))}
              className="green"
            >
                green 
            </button>
          </li>
        </ul>

        {/* <label htmlFor="title">
          <span> title </span>
          <input type="text" name="title" placeholder="my todo list..."/>
        </label>

        <label htmlFor="color">
          <span> color </span>
          <input type="color" name="color" defaultValue={'#c8a3ce'}/>
        </label>

        <label htmlFor="dateDue">
          <span> Due Date </span>
          <input type="date" name="dateDue" />
        </label>

        <label htmlFor="dateDue">
          <span> Type </span>
          <select>
            <option value={'normal'}> normal </option>
            <option value={'grocery'}> grocery </option>
            <option value={'chores'}> chores </option>
          </select>
        </label> */}

        <button type="submit"> <MdAdd /> </button>

      </fieldset>

    </StyledTodoForm>
  )
}


const StyledTodoForm = styled.form<{color:string}>`

  background: ${p => `var(--cg-${p.color})`};
  max-width: 30rem;

  legend{
    font-size: 1.7rem;
  }

  fieldset{
    display: flex;
    flex-direction: column;
    background-color: black;

    /* label{
      display: flex;
      flex-direction: column;

      margin-bottom: 1.3rem;

      span{
        font-weight: bolder;
      }
    } */
  }

  ul.colors{
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .red{
      background: var(--cg-red);
    }
    .blue{
      background: var(--cg-blue);
    }
    .pink{
      background: var(--cg-pink);
    }
    .purple{
      background: var(--cg-purple);
    }
    .cyan{
      background: var(--cg-cyan);
    }
    .white{
      background: var(--cg-white);
    }
    .green{
      background: var(--cg-green);
    }
    .yellow{
      background: var(--cg-yellow);
    }
  }

  button[type="submit"]{
    margin-left: auto;
    margin-top: 1rem;
    float: right;
  }
`