const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    return await mongoose.connect(process.env.MONGODB_URI);
  } catch (err) {
    console.log(err);
  }
};

export default connectMongoDB;
