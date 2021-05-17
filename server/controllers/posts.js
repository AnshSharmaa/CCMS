import PostSchema from "../models/postSchema.js"

export const getPosts = async (req, res) => {
  try {
    const postSchema = await PostSchema.find()

    res.status(200).json(postSchema)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPosts = (req, res) => {
  res.send("Post creation")
}
