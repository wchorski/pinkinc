/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
*/

// const ROLES = require('./roles_list')
import connectDB from '../../../db/connection'
const User = require('../../../models/User');
const bcrypt = require('bcrypt');
const defaultUsers = require('../../../config/defaultUsers.json')

export default function createusers(req, res) { 
  // console.log('createusers');
  res.json(defaultUsers)
}

  // try{
  //   console.log('CONNECTING TO MONGO');
  //   await connectDB();
  //   console.log('CONNECTED TO MONGO');

  //   console.log('FETCHING DOCUMENTS');
  //   const tests = await User.find({});
  //   console.log('FETCHED DOCUMENTS');

  //   return {
  //     props: {
  //       tests: JSON.parse(JSON.stringify(tests)),
  //     },
  //   };
    
  // } catch (err){
  //   console.error(err)
  //   return {notFound: true,}
  // }

// export default async function createusers(req, res) {
  
//   try{
//     await connectDB()
//     // See if there is any users. 
//     const users = await User.find();

//     if (users.length === 0){
  
//       console.log('*** *** *** *** *** *** *** *** *** *** *** *** *** ***');
//       console.log('*** Default Users Created ***');
  
//       defaultUsers.forEach(async (usr) => {
//         //encrypt the password
//         // TODO has password 
//         // const hashedPwd = await bcrypt.hash(usr.password, 10);
//         const hashedPwd = usr.password;
    
//         //create and store the new user
//         const result = await User.create({
//           "email": usr.email,
//           "username": usr.username,
//           "roles": usr.roles,
//           "password": hashedPwd
//         });
  
//         console.log(usr);
//       })
  
//       console.log('*** *** *** *** *** *** *** *** *** *** *** *** *** ***');
//       console.log('*** *** *** *** *** *** *** *** *** *** *** *** *** ***');
//       return null;
//     } 
//     return null


//   } catch (err) {
//     console.error(err);
//   }
// }