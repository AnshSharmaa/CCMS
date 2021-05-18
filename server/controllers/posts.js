import PostSchema from "../models/postSchema.js"

export const getPosts = async (req, res) => {
  try {
    const postSchema = await PostSchema.find()

    res.status(200).json(postSchema)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPosts = async (req, res) => {
  const post = req.body

  const newPost = new PostSchema(post)

  try {
    await newPost.save()

    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}