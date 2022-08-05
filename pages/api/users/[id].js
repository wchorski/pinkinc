/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
*/

import { stringify } from 'querystring';
import connectDB from '../../../db/connection'
import Model from '../../../models/user'

// export default async function getServerSideProps (context) {
//   if (req.method === 'PATCH') {
//     const { params } = context;
//     console.log(params); // { category: 'sedan', id: '2' }
//     return {
//       props: {
//         heartCount: {},
//       },
//     };
//   }
// };

// export default async function getServerSideProps (context) {
//   console.log(context);
// }

export default async function usersByID(req, res) {

  if (req.method === 'PATCH') {

    // console.log("* method PATCH === " + req.method)
    // console.log(req.body.heartCount);

    try {
      const user = await Model.findById(req.body._id)
      Object.assign(user, req.body)
      res.status(200).json(user)
      user.save()

    } catch (err) {
      console.error(err);
      res.status(400).json({ status: 'failed to update post', message: err.toString() })
    }
  }


  if (req.method === 'GET') {
    console.log("* method GET === " + req.method)
    try {
      console.log("get one User: " + req.query.id);

    } catch (error) {
      return res.status(404).json({ success: false, message: error.toString() })
    }
  }

}