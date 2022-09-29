const express = require("express")
const Patient = require("../Models/Patient.Model")
const router = express.Router() 
 
router.get("", async(req, res) => {
    try{
      const patient = await Patient.find().lean().exec();
  
        return res.status(200).send(patient);
    }
    catch(err) {
        return res.status(401).send({error: err.message});
    }
  });
  
  
  router.post("", async(req, res) => {
    try{
        const patient = await Patient.create(req.body);
  
        return res.status(200).send(patient);
    }
    catch(err) {
        return res.status(401).send({error: err.message});
    }
  });
  

  router.get("/:id", async (req, res) => {
    try {
      const patient = await Patient.findById(req.params.id).lean().exec();
  
      return res.status(200).send(patient);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports = router