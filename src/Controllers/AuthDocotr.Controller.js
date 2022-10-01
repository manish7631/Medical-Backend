const express = require("express")
 
const jwt = require('jsonwebtoken');
const Doctor = require("../Models/Doctor.Model");
require('dotenv').config()


const generateToken = (doctor) => {
  
    return jwt.sign({ foo: 'bar' }, process.env.JWT_SECRET_KEY );
    
}
const DoctorRegister = async (req, res) => {
    try{
    let doctor = await Doctor.findOne({email:req.body.email})
    // Email Checking
    if(doctor){
       return res.status(400).send({message:"Email already exists"})
   }

   doctor = await Doctor.create(req.body)

   const token = generateToken(doctor)


   return res.status(200).send({doctor, token})

    }catch(err){
res.status(400).send({message: err.message})
    }
}


const DoctorLogin = async (req, res) => {
    try{

        const doctor = await Doctor.findOne({email: req.body.email})

        if(!doctor){
            return res.status(400).send("worng email or password")
        }

        const match = doctor.checkPassword(req.body.password)

        if(!match){
            return res.status(400).send({message:"worng email or passwrod"})
        }

        const token = generateToken(doctor)

        return res.status(200).send({doctor, token})
    }catch(err){
res.status(400).send({messageee: err.message   })
    }
}

module.exports = {DoctorRegister, DoctorLogin}