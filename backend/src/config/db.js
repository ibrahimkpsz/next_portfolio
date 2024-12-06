require("dotenv").config();
const mongoose = require("mongoose");

const { MONGODB_URI } = process.env;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("DB connected.");
    } catch (err) {
        console.error(err);
    }
}

connectDB();