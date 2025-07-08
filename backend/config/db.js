import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("DB Connected"))
        .catch((err) => {
            console.error("MongoDB connection error:", err);
            process.exit(1);
        });
}