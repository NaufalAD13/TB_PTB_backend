const express = require("express");
const dotenv = require("dotenv");
const app = express();

const userRoutes = require("./routers/userRoute");
const mahasiswaRoutes = require('./routers/mahasiswaRoute')
const authRoutes = require('./routers/authRoute')
dotenv.config()

app.use(express.json());

const PORT = process.env.DB_PORT;

app.use(express.json());
app.use('/user',  userRoutes)
app.use('/mahasiswa', mahasiswaRoutes)
app.use('/auth', authRoutes)
app.get("/api", (req,res)=> {
    res.json("Hello world")
})


app.listen(PORT, () => {
    console.log("Express API running in port: " + PORT);
})

module.exports = app;