import axios from "axios"

const API = axios.create({baseURL: "http://localhost:5000/data"})

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
  }
  return req
})

export const fetchPosts = () => API.get("/posts")
export const createPost = (newPost) => API.post("/posts", newPost)
export const updatePost = (id, updatedPost) => API.patch(`/post/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/post/${id}`)

export const fetchProfiles = () => API.get("/profiles")
export const createProfile = (newPost) => API.post("/profiles", newPost)
export const updateProfile = (id, updatedPost) => API.patch(`/profile/${id}`, updatedPost)
export const deleteProfile = (id) => API.delete(`/profile/${id}`)
