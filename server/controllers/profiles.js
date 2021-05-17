import ProfileSchema from "../models/profileSchema.js"

export const getProfile = async (req, res) => {
  try {
    const profileSchema = await ProfileSchema.find()

    res.status(200).json(profileSchema)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createProfile = (req, res) => {
  res.send("Profile creation")
}
