const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const patientSchema = new mongoose.Schema({
    name:{type:String, required:true},
    state:{type:String, required:true},
    email:{type:String, required:true},
    mobile:{type:Number, required:true},
    password:{type:String, required:true},
  },
  {
    versionKey: false,
    timestamps: true, 
  }
  )


  
  patientSchema.pre("save", function(next){
    const hash = bcrypt.hashSync(this.password, 8);
 
    this.password = hash
       return next()
     })
   
   
     patientSchema.methods.checkPassword = function(password){
       return bcrypt.compareSync(password, this.password)
     }
  
  const Patient = mongoose.model("patientDetails", patientSchema);
  

  module.exports = Patient;