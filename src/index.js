const express = require("express")
 

const patientController = require("./Controllers/Patient.Controller")

const {PatientRegister, PatientLogin} = require("./Controllers/AuthPatient.contorller")
 
const {DoctorRegister, DoctorLogin} = require("./Controllers/AuthDocotr.Controller")

const cors = require('cors')

const SocketIo = require('socket.io')

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

 app.post("/patientregister", PatientRegister)
 
 app.post("/patientlogin", PatientLogin)

 app.post("/doctorregister", DoctorRegister)

 app.post("/doctorlogin", DoctorLogin)
app.use("/patient", patientController)
module.exports = app
 

 

 