const dotenv = require("dotenv").config()
const app = require("./app");
const connectDB = require("./config/dbConnection");

//Connecting to database
connectDB();

//making port
const port = process.env.PORT || 5000;

//ask to listen to the defined port
const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});