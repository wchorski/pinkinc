export type Todo = {
  status: 'current'|'completed'|'canceled'|'delete'
  message:string,
}

export type Note = {
  _id:string,
  title:string,
  color:string,
  dateCreated:string,
  dateDue:string,
  type:'normal'|'grocery'|'chores'|'fun',
  todos:Todo[]
}

export type InputObj = {
  name:string,
  disabled?:boolean,
  type: 'text'|'email'|'textarea'|'time'|'date'|'select'|'number'|'datetime-local'|'color',
  label: string,
  placeholder?:string,
  pattern?:string,
  minLength?:string,
  maxLength?:string
  errorMessage:string,
  required: boolean,
  initial?: string|number,
  options?: {
    label:string,
    value:string,
  }[]
}