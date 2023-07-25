/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
*/

import connectDB from '../../../db/connection'
import Model from '../../../models/todo'

export default async function addTodo(req:any, res:any) {

  try {
    const { title, color, dateCreated, dateDue, type, todos } = req.body

    // console.log('-- connecting to mongo --');
    await connectDB()
    // console.log('-- CONNECTED to mongo --');

    //create and store the new user
    const newItem = await Model.create({
      title,
      color,
      dateCreated,
      dateDue,
      type,
      todos,
    });
    console.log(newItem);

    // console.log('-- users/add.js --')
    // const newModel = await Model.create(newUser) 
    // console.log(req.body)
    // console.log('-- -- -- -- -- -- ')

    res.status(201).json({ success: true, message: `new todo create: ${newItem}` })

  } catch (err) {
    console.error(err)
    // @ts-ignore
    res.status(400).json({ status: 'failed to create user', message: err.toString() })
  }
}