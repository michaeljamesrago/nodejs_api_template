import express from 'express'
import bodyParser from 'body-parser'

import apiRouter from './routes/api.js'

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use('/api', apiRouter)

app.get('/', (req, res) => res.send("Server is running."))

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}.`))