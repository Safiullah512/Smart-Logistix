const mongoose = require("mongoose");

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Failed");
    console.log(error.message);
  }
};

module.exports = connectDB;
