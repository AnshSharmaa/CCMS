import express from "express"
import { getPosts, createPosts } from "../controllers/posts.js"
import { getProfile, createProfile } from "../controllers/profiles.js"

const router = express.Router()

//Post
router.get("/posts", getPosts)
router.post("/posts", createPosts)

// Profile
router.get("/profiles", getProfile)
router.post("/profiles", createProfile)

export default router
