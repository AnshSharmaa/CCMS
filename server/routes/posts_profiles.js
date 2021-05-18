import express from "express"
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js"
import {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/profiles.js"

const router = express.Router()

//Post
router.get("/posts", getPosts)
router.post("/posts", createPost)
router.patch("/:id", updatePost)
router.delete("/:id", deletePost)

// Profile
router.get("/profiles", getProfile)
router.post("/profiles", createProfile)
router.patch("/:id", updateProfile)
router.delete("/:id", deleteProfile)

export default router
