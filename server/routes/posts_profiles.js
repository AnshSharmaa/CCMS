import express from "express"
import auth from "../middleware/auth.js"

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
router.post("/posts", auth, createPost)
router.patch("/:id", auth, updatePost)
router.delete("/:id", auth, deletePost)

// Profile
router.get("/profiles", getProfile)
router.post("/profiles", auth, createProfile)
router.patch("/:id", auth, updateProfile)
router.delete("/:id", auth, deleteProfile)

export default router
