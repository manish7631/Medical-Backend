const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    Name:{type:String, required:true},
    State:{type:String, required:true},
    Email:{type:String, required:true},
    Mobile:{type:Number, required:true},
    
  },
  {
    versionKey: false,
    timestamps: true, 
  }
  )
  
  const Patient = mongoose.model("patient", patientSchema);
  

  module.exports = Patient;