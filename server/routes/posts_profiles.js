import express from "express"
import { getPosts, createPosts } from "../controllers/posts.js"

const router = express.Router()

//Post
router.get("/", getPosts)
router.post("/", createPosts)

// Profile
router.get("/", getProfile)
router.post("/", createProfile)

export default router
