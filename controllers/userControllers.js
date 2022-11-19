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
      res.status(201).json({success: true, message: "user created sucessfully", user})
    } catch (error) {
      console.log(error.message)
    }
}
