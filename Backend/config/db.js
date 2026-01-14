import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("DB Connection Established");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/schoolofnature`);
}

export default connectDB;
