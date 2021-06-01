import React from "react"
import { useLocation } from "react-router-dom"

const Edit = () => {
  const location = useLocation()
  const { post } = location.state
  console.log(post)
  return <div>{post.Title} </div>
}

export default Edit
