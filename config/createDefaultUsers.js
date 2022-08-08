/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

import connectDB from '../db/connection'
import Model from '../models/user'
import fakeData from './defaultUsers.json'


const createDefaultUsers  = async (req, res) => {
  try {
    // await connectDB()
    const users = await Model.find();
    console.log('-- create default --');
    console.log(users);

    if (users.length === 0){
      console.log('-- NO USERS FOUND --');

      fakeData.map(usr => {
        const addUser = require('../pages/api/users/add')
        addUser(usr)
      })
    }

  } catch (err) {
    res.status(400).json({ status: 'failed to create default user', message: err.toString() })
  }

  return null
}

module.exports = createDefaultUsers