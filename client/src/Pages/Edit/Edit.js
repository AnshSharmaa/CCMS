import React from "react"
import {useLocation} from "react-router-dom"
import Header from "../../components/header"
import EditPost from "./EditPost"
import EditProfile from "./EditProfile"

const Edit = () => {
  const location = useLocation()
  const type = location.state?.post?.Date ? true : false

  return (
    <div>
      <Header />
      {type && <EditPost post={location.state.post} />}

      {!type && <EditProfile profile={location.state.profile} />}
    </div>
  )
}

export default Edit
