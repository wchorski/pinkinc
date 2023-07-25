import styled from "styled-components"
import { InputObj, Note } from "../../types/types"
import { FormEvent } from "react"
import useForm2 from "../../lib/useForm2"
import { FormInput } from "../elements/FormInput"

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
      // disabled:true,
    },
    {
      name: 'color',
      type: 'color',
      placeholder: '', 
      label: 'color',
      errorMessage: 'color error',
      required: true,
      initial: '#c8a3ce',
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
      const res = await fetch('/api/todos/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(values)
      })

      const data = await res.json()
      console.log(data)
      refetchData()
      // signIn('yourProviderHere', { callbackUrl: '/love' })

    } catch (err) {
      console.error(err)
    }

  }

  return (
    <StyledTodoForm onSubmit={handleSubmit}>

      <legend>Create Note</legend>

      <fieldset>

        <FormInput 
          {...handleFindProps('title')}
          value={values['title']}
          onChange={handleChange}
        />
        <FormInput 
          {...handleFindProps('color')}
          value={values['color']}
          onChange={handleChange}
        />

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

      </fieldset>

      <button type="submit"> submit </button>
    </StyledTodoForm>
  )
}


const StyledTodoForm = styled.form`

  max-width: 30rem;

  legend{
    font-size: 1.7rem;
  }

  fieldset{
    display: flex;
    flex-direction: column;

    /* label{
      display: flex;
      flex-direction: column;

      margin-bottom: 1.3rem;

      span{
        font-weight: bolder;
      }
    } */
  }

  button[type="submit"]{
    margin-left: auto;
    margin-top: 1rem;
    float: right;
  }
`