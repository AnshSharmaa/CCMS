import mongoose from "mongoose"

const postSchema = mongoose.Schema({
  Title: String,
  Author: String,
  Content: String,
  Date: Date,
})

const PostSchema = mongoose.model("PostSchema", postSchema)

export default PostSchema
