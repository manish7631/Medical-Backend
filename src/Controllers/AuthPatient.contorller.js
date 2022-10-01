const express = require("express")
const Patient = require("../Models/Patient.Model")
const jwt = require('jsonwebtoken');
 
require('dotenv').config()


const generateToken = (patient) => {
 
    return jwt.sign({ foo: 'bar' }, process.env.JWT_SECRET_KEY );
    
}
const PatientRegister = async (req, res) => {
    try{
    let patient = await Patient.findOne({email:req.body.email})
    // Email Checking
    if(patient){
       return res.status(400).send({message:"Email already exists"})
   }

   patient = await Patient.create(req.body)

   const token = generateToken(patient)


   return res.status(200).send({patient, token})

    }catch(err){
res.status(400).send({message: err.message})
    }
}


const PatientLogin = async (req, res) => {
    try{

        const patient = await Patient.findOne({email: req.body.email})

        if(!patient){
            return res.status(400).send("worng email or password")
        }

        const match = patient.checkPassword(req.body.password)

        if(!match){
            return res.status(400).send({message:"worng email or passwrod"})
        }

        const token = generateToken(patient)

        return res.status(200).send({patient, token})
    }catch(err){
res.status(400).send({message: err.message})
    }
}

module.exports = {PatientRegister, PatientLogin}