// import { Schema, model, models } from 'mongoose'
import mongoose from 'mongoose'


const todoSchema = new mongoose.Schema({
  status: String,
  message: String,
});

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#ff00a5"
  },
  type: {
    type: String,
    default: "normal"
  },
  status: {
    type: String,
    default: "current"
  },
  todos: [todoSchema],
});

// const User = models.User || model('User', todoSchema)
// export default User
export default mongoose.models.Note || mongoose.model('Note', noteSchema)