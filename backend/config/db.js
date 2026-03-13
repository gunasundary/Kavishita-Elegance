// config/db.js

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gunasundaryboopalan_db_user:Kavinaya%40123@cluster-1.bld6bg4.mongodb.net/kavishita_elegance?retryWrites=true&w=majority"
    );

    console.log("MongoDB Atlas Connected");
  } catch (error) {
    console.log("Database connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;