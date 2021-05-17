import mongoose from "mongoose"

const postSchema = mongoose.Schema({
  title: String,
  Author: String,
  Content: String,
  Date: String,
})

const PostMessage = mongoose.model("PostMessage", postSchema)

export default PostMessage
