const { Router } = require("express");
const authRouter = require("./authRoutes");

const router = Router()

router.use('/auth', authRouter)