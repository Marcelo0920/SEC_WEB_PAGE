import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "SEC",
    });

    console.log(`Server Connected to database ${connection.host}`);
  } catch (error) {
    console.log("Some Error Ocurred", error);
    process.exit(1);
  }
};
