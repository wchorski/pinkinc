// import { Schema, model, models } from 'mongoose'
import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
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
  todos: {
    type: Array,
  },
});

// const User = models.User || model('User', todoSchema)
// export default User
export default mongoose.models.Todo || mongoose.model('Todo', todoSchema)