const express = require('express')
const cors = require('cors')
const authRouter = require('./routes/authRoutes')

const app = express()

const port = 3000

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)

app.use('/', (req, res) => {
    res.status(200).json({
        msg: "Server is Running"
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

module.exports = app
