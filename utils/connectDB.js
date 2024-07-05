const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(
        "mongodb+srv://sumanthiyengar2003:OrHKNRkMjVGe1IwE@mernai.fyme1wm.mongodb.net/mern-ai-mns?retryWrites=true&w=majority&appName=MernAi"
      );
  
      console.log(`Mongodb connected ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error connecting to MongoDB ${error.message}`);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;