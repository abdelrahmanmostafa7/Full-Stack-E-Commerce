const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express()
app.use(cors({
  origin: '*',
  credentials: true
  }));

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


// middleware
app.use(express.json())


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