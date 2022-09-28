const express = require("express")
 

const PateinetController = require("./Controllers/Patient.Controller")


const app = express()
 app.use(express.json())
 app.get("/", async(req, res) => {
    try{
         res.status(200).send("Welcome to the Backend of  Health Care")
     }
    catch(err) {
         res.status(400).send(err)
     }
 })


 app.use("/patient", PateinetController)


module.exports = app
 

 

 