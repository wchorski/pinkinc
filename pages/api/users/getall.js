/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
*/

import { authOptions } from "../auth/[...nextauth]"
import { unstable_getServerSession } from "next-auth/next"
import { useSession } from "next-auth/react"

import connectDB from '../../../db/connection'
import Model from '../../../models/user'


export default async function getall(req, res) {

  // const session = await unstable_getServerSession(req, res, authOptions)
  
  // if (session) {

  try{
    await connectDB()

    const users = await Model.find();
    if (!users) return res.status(204).json({ 'message': 'No users found' });

    // const usersNoPass = users.map(usr =>{
    //   usr.replace(password, "")
    // })
    // console.log('usersNoPass')
    // console.log(usersNoPass)


    res.json(users);
    
  } catch (err) {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
      message: err.toString()
    })
  }

  // }
}