import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("DB Connection Established");
    });
    // Use dbName option to safely select the database, regardingless of query params
    await mongoose.connect(process.env.MONGODB_URI, { dbName: 'schoolofnature' });
}

export default connectDB;
