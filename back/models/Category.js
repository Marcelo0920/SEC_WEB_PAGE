import mongoose from "mongoose";

const schema = new mongoose.Schema({
  category: {
    type: String,
  },
});

export const Category = mongoose.model("Category", schema);
