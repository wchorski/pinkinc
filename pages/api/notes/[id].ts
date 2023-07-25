/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
*/

import { stringify } from 'querystring';
import connectDB from '../../../db/connection'
import Model from '../../../models/note'

import { authOptions } from "../auth/[...nextauth]"
import ROLES_LIST from '../../../config/roles_list'
import { unstable_getServerSession } from "next-auth/next"
import { Todo } from '../../../types/types';


export default async function notessByID(req:any, res:any) {

  console.log('+ - + - + ' + req.method + ' | Notes by ID' + ' + - + - +');
  // if (req.method === 'GET') {
  //   // console.log("* method GET === " + req.method)
  //   try {
  //     await connectDB()

  //     const user = await Model.findById(req.query.id)
  //     res.status(200).json(user)
  //     return

  //   } catch (error) {
  //     return res.status(404).json({ success: false, message: error.toString() })
  //   }
  // }


  // const session = await unstable_getServerSession(req, res, authOptions)

  // if not logged in


  if (req.method === 'PATCH') {

    try {
      await connectDB()
      // console.log("query id: ", req.query.id);
      const item = await Model.findById(req.query.id)    
      const updateData = req.body;

      

      item.todos.map((todo:Todo) => {
        if(todo?.message === updateData.todos[0]?.message){  // if checkbox is checked          
          todo.status = updateData.todos[0].status
          console.log(todo?.message);
          
          updateData.todos.shift()
        }
      })

      
      item.todos = [...item.todos, ...updateData.todos]
      const filteredTodos = item.todos.filter((obj:Todo) => obj.status !== 'delete');
      item.todos = filteredTodos
      
      item.save()
      res.status(200).json(item)
      return

    } catch (err) {
      console.error(err);
      // @ts-ignore
      res.status(400).json({ status: 'failed to update todo', message: err.toString() })
    }
  }

  if (req.method === 'DELETE') {
    console.log("* method DELETE === " + req.method)
    try {
      await connectDB()

      const item = await Model.findByIdAndDelete(req.query.id)
      res.status(200).json({...item, message: "todo deleted"})
      return

    } catch (error) {
      // @ts-ignore
      return res.status(404).json({ success: false, message: error.toString() })
    }
  }
  

}