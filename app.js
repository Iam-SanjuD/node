const express = require("express")
const demoRoute = require("./Route/demoRoute")
const errorHandler = require("./middleware/errorHandler")
const cors = require('cors');

const app = express()

// //To access data from the body
app.use(express.json());

// cors initialize
app.use(cors({
    origin: 'http://localhost:5173'
}));

//calling the demoRoute
app.use("/api/v1/demo", demoRoute)


app.use(errorHandler)

module.exports = app