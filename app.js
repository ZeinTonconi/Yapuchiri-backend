const express = require('express')
const cors = require('cors')
const authRouter = require('./routes/authRoutes')

const app = express()

const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json("Server is running")
})

app.use('/api/auth', authRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

console.log("Export APP")

module.exports = app
