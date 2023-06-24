const express = require('express');
const { createDemoData, getDemoData } = require("../Controller/demoController")

//creating router variable
const router = express.Router();

//"/" path get and post
router.route("/")
    .get(getDemoData)
    .post(createDemoData)


module.exports = router;