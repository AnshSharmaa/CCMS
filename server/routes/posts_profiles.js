import express from "express"
import { getPosts, createPost, updatePost } from "../controllers/posts.js"
import {
  getProfile,
  createProfile,
  updateProfile,
} from "../controllers/profiles.js"

const router = express.Router()

//Post
router.get("/posts", getPosts)
router.post("/posts", createPost)
router.patch("/:id", updatePost)

// Profile
router.get("/profiles", getProfile)
router.post("/profiles", createProfile)
router.patch("/:id", updateProfile)

export default router
