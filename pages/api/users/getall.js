/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
*/

import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

import connectDB from '../../../db/connection'
import Model from '../../../models/user'


export default async function getall(req, res) {

  const session = await unstable_getServerSession(req, res, authOptions)
  
  if (session) {
    await connectDB()

    const users = await Model.find();
    if (!users) return res.status(204).json({ 'message': 'No users found' });
    res.json(users);

    // res.send({
    //   content: "This is protected content. You can access this content because you are signed in.",
    // })

  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    })
  }
}