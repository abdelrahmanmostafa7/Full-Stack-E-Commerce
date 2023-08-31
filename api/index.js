const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./routes/user.js")
const authRoute = require("./routes/auth.js")


const app = express()
// app.use(cors({
//   origin: '*',
//   credentials: true
//   }));

// connection to DB
dotenv.config();
mongoose.set("strictQuery", true);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB...");
    } catch (error) {
        console.log(error);
    }
};


// middleware & routes
app.use(express.json())
app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)





// error handling middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    // return res.status(errorStatus).send(errorMessage);
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

//port&connection
app.listen(8800, () => {
    connect()
    console.log('Backend server is running...');
})