const userModels = require('../models/userModels');

exports.home = (req, res) => {
   res.send("welcome to home")
}

exports.createUser = async(req, res) => {
    try {
      const {name, email} = req.body;
      // to check all the details
      if(!name || !email){
         res.send("name and email feilds are required")
         throw new Error("name and email feilds are required")
      }
      // check email in db
      const userExists = await userModels.findOne({email})
      if(userExists){
         res.send("Email Already Exists")
         throw new Error("Email Already Exists")
      }
      // inserting into db
      const user = await userModels.create({name, email})
      user.save();
      res.status(201).json({success: true, message: "user created sucessfully", user})
    } catch (error) {
      console.log(error.message)
    }
}

exports.getUsers = async(req, res) => {
   try {
      const users = await userModels.find();
      res.status(200).json({success: true, users})
   } catch (error) {
      console.log(error.message)
   }
}

exports.editUsers = async (req, res) => {
   try {
      const users = await userModels.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({success : true, message:"user updated successfully", users})
   } catch (error) {
      console.log(error.message)
      res.status(401).json({success : false, message: error.message})
   }
}

exports.deleteUsers = async (req, res) => {
   try {
      const users = await userModels.findByIdAndDelete(req.params.id)
      res.status(200).json({success : true, message:"user Deleted successfully", users})
   } catch (error) {
      console.log(error.message)
      res.status(401).json({success : false, message: error.message})
   }
}