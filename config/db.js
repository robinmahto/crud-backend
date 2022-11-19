const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then((conn)=>console.log(`connected DB: ${conn.connection.host}`))
    .catch((error)=>{
        console.log(error.message),
        process.exit(1)
    }
    )
}

module.exports = connectDB;