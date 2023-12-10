const { default: mongoose } = require("mongoose")

const dbConnect=()=>{
    try {
        mongoose.connect(process.env.CONNECTION_STRING);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Database connection failed');
    }
}

module.exports=dbConnect;