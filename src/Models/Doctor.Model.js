const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const doctorSchema = new mongoose.Schema({
    name:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true},
     password:{type:String, required:true},
     specification:{type:String, required:true, unique:true},
   
  },
  {
    versionKey: false,
    timestamps: true, 
  }
  )
  

  doctorSchema.pre("save", function(next){
 const hash = bcrypt.hashSync(this.password, 8);
 this.password = hash
    return next()
  })


  doctorSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password)
  }


  const Doctor = mongoose.model("doctorDetails", doctorSchema);
  

  module.exports = Doctor;