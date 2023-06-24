const mongoose = require("mongoose")

//defining schema for demos collection
const demoSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, "Must give a name!"]
    },
    email: {
        type: String,
        required: [true, "Must give an email address!"],
        unique: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model("demo", demoSchema)