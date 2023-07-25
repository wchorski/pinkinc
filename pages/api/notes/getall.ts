/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
*/


import connectDB from '../../../db/connection'
import Model from '../../../models/note'


export default async function getall(req:any, res:any) {

  try{
    await connectDB()

    const items = await Model.find();
    if (!items) return res.status(204).json({ 'message': 'No notes found' });

    res.json(items);
    
  } catch (err) {
    res.send({
      error: "idk notes not here",
      // @ts-ignore
      message: err.toString()
    })
  }
}