import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

app.use(express.json({ limit: "10mb", extended: true }))
app.use(express.urlencoded({ limit: "10mb", extended: true }))
app.use(cors())

// url for db connection, using mongodb locally for now
const CONNECTION_URL = "mongodb://127.0.0.1:27017"
const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) // to remove warnings
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`))

mongoose.set("useFindAndModify", false) //for warning again
