const typeorm = require('typeorm')
const express = require('express')
const cors = require('cors')
const authRouter = require('./src/routes/authRoutes')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const dataSource = new typeorm.DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    ssl: true,
    entities: [

    ],
})

dataSource.initialize()
    .then(() => {
        app.get('/', (req, res) => {
            res.status(200).json("Server is running")
        })

        app.use('/api/auth', authRouter)

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    })

module.exports = app