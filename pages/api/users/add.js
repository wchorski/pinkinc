/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
*/

import connectDB from '../../../db/connection'
import Model from '../../../models/User'


export default async function addUser(req, res) {

  try{
    const {email, password } = req.body
  
    // console.log('-- connecting to mongo --');
    await connectDB()
    // console.log('-- CONNECTED to mongo --');
  
  
    console.log('-- users/add.js --')
    const newModel = await Model.create(req.body) 
    console.log(req.body)
    console.log('-- -- -- -- -- -- ')
  
    res.status(200).json({ newModel })

  } catch (err) {
    console.error(err)
    res.status(400).json({status: 'failed to create user', message: err.toString()})
  }
}