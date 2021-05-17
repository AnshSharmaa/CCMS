import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import Routes from "./routes/posts_profiles.js"

const app = express()
dotenv.config()

app.use("/data", Routes)

app.use(express.json({ limit: "10mb", extended: true }))
app.use(express.urlencoded({ limit: "10mb", extended: true }))
app.use(cors())

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) // to remove warnings
  .then(() =>
    app.listen(PORT, () => console.log(`Port: http://localhost:${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`))

mongoose.set("useFindAndModify", false) //for warning again
