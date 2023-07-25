/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
*/

import { stringify } from 'querystring';
import connectDB from '../../../db/connection'
import Model from '../../../models/todo'

import { authOptions } from "../auth/[...nextauth]"
import ROLES_LIST from '../../../config/roles_list'
import { unstable_getServerSession } from "next-auth/next"


export default async function todosByID(req:any, res:any) {

  console.log(req.method);
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
    console.log("* method PATCH === " + req.method)

    try {
      await connectDB()

      const item = await Model.findById(req.body._id)      
      const updateData = req.body;
      // console.log(updateData);

      item.todos = [...item.todos, ...updateData.todos]
      // Object.assign(item, updateData)
      // console.log(item);
      
      res.status(200).json(item)
      item.save()
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