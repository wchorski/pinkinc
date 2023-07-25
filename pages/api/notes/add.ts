/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
*/

import connectDB from '../../../db/connection'
import Model from '../../../models/note'

export default async function addNote(req:any, res:any) {

  try {
    const { title, color, dateCreated, dateDue, type, todos } = req.body
    // console.log(req.body);
    await connectDB()

    //create and store the new user
    const newItem = await Model.create({
      title,
      color,
      dateCreated,
      dateDue,
      type,
      todos,
    });
    // console.log(newItem);

    res.status(201).json({ success: true, message: `new note create: ${newItem}` })

  } catch (err) {
    console.error(err)
    // @ts-ignore
    res.status(400).json({ status: 'failed to create user', message: err.toString() })
  }
}