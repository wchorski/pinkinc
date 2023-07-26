import styled from "styled-components"
import { InputObj, Note } from "../../types/types"
import { FormEvent } from "react"
import useForm2 from "../../lib/useForm2"
import { FormInput } from "../elements/FormInput"
import { MdAdd } from "react-icons/md";

type Props = {
  // refetchData: any,
  setTodosState:any,
  id:string,
}

export function TodoForm({id, setTodosState}:Props) {

  const inputs:InputObj[] = [
    {
      name: '_id',
      type: 'text',
      placeholder: '', 
      label: '_id',
      errorMessage: '_id name error',
      required: true,
      initial: id,
      disabled:true,
    },
    {
      name: 'message',
      type: 'text',
      placeholder: '...', 
      label: 'message',
      errorMessage: 'message name error',
      required: true,
      initial: '',
      // disabled:true,
    },
    {
      name: 'status',
      type: 'select',
      placeholder: '', 
      label: 'status',
      errorMessage: 'status error',
      required: true,
      initial: 'current',
      options: [
        {label: 'current', value: 'current',},
        {label: 'completed', value: 'completed',},
      ],
      disabled:true,
    },
  ]

  const {values, setValues, handleFindProps, handleChange, clearForm, resetForm } = useForm2(inputs)

  const handleSubmit = async (e:FormEvent) => {
    // console.log(values);
    e.preventDefault()

    const valuesFormat:any = {
      _id: id,
      todos: [{
        status: values.status,
        message: values.message,
      }]
    }
    // console.log(valuesFormat);
  
    try{
      const res = await fetch(`/api/notes/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json' },
  
        body: JSON.stringify(valuesFormat)
      })
  
      const data:Note = await res.json()
      // console.log(data);
      setTodosState(data.todos)
      resetForm()
      
    } catch (err){
      console.error(err);
    }
  }

  return (
    <StyledTodoForm onSubmit={handleSubmit}>

        <FormInput 
          {...handleFindProps('message')}
          value={values['message']}
          onChange={handleChange}
        />

        {/* <FormInput 
          {...handleFindProps('status')}
          value={values['status']}
          onChange={handleChange}
        /> */}

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
    </StyledTodoForm>
  )
}


const StyledTodoForm = styled.form`

  max-width: 30rem;
  display: flex;
  margin-top: 1rem;

  legend{
    font-size: 1.7rem;
  }

  fieldset{
    display: flex;
    flex-direction: column;
    border: none;
    padding: 0;

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
    /* margin-top: 1rem; */
    float: right;
  }
`