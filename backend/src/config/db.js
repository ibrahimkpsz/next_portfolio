require("dotenv").config();
const mongoose = require("mongoose");
const { createAdminAccount } = require("../utils/createAdminAccount");
const { MONGODB_URI } = process.env;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("DB connected.");
        createAdminAccount();
    } catch (err) {
        console.error(err);
    }
}

connectDB();