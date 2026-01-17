import mongoose from "mongoose";
import dotenv from "dotenv";
import orderModel from "./models/orderModel.js";
import userModel from "./models/userModel.js";
import productModel from "./models/productModel.js";

dotenv.config();

const clearData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected");

        // Clear Orders
        await orderModel.deleteMany({});
        console.log("Orders Cleared");

        // Clear Users (Non-Admin users are in DB, Admin is hardcoded in .env so this is safe)
        await userModel.deleteMany({});
        console.log("Users Cleared");

        // Uncomment the next line if you want to clear products too
        // await productModel.deleteMany({});
        // console.log("Products Cleared");

        console.log("Data successfully cleared!");
        process.exit();
    } catch (error) {
        console.error("Error clearing data:", error);
        process.exit(1);
    }
};

clearData();
