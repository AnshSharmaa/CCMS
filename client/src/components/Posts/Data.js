import React, { useState, useEffect } from "react"

import * as api from "../../api/api"

const Data = () => {
  const [data, setData] = useState({ posts: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    await api
      .fetchPosts()
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  if (loading) return "Loading..."
  if (error) return "Error!"
  return (
    <>
      <pre>{data}</pre>
    </>
  )
}

export default Data
