const asyncHandler = require("express-async-handler")
const Demo = require("../Models/demoModel")

{/*
    desc: input demo data
    method: POST
    path: "http://localhost:5000/api/v1/demo/"
    access: public
*/}
const createDemoData = asyncHandler(async(req, res) => {
    console.log("Data from body: ", req.body)
    const {name, email} = req.body
    if(!name || !email){
        res.status(400);
        throw new Error("All the fields are required!");
    }
    
    const dataAvailable = await Demo.findOne({email})
    
    if(dataAvailable){
       res.status(400);
        throw new Error("Email already registered!");
    }

    const demoData = await Demo.create({
        name,
        email
    });

    res.status(201).json(demoData);
})

{/*
    desc: get demo data
    method: GET
    path: "http://localhost:5000/api/v1/demo/"
    access: public
*/}
const getDemoData =asyncHandler(async(req, res) => {
    const demoData = await Demo.find();
    res.status(200).json(demoData);
})

module.exports = { createDemoData, getDemoData }