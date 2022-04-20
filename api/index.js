import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

// load vars from ENV variables
dotenv.config()
const port = process.env.PORT ? process.env.PORT : 3002
const url = process.env.URL ? process.env.URL : 'localhost'

// initialize express server
const app = express()
app.use(
  cors({
    origin: process.env.APP_URL,
    credentials: true,
  })
)

app.get('/', (req, res) => {
  res.send('API for Wellness Rips')
})

// start the server
app.listen(port, url, () => {
  console.log(`EXPRESS: started on http://${url}:${port}`)
})
