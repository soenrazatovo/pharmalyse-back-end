const express = require("express")
const app = express()
const port = 3000

const cors = require("cors")
const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-type", "Authorization"],
}
app.use(cors(corsOptions))

const indexRouter = require("./routes/index.js")
const userRouter = require("./routes/user.js")

app.use('/', indexRouter)
app.use('/user', userRouter)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})