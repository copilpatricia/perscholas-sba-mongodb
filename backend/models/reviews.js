import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 4,
        maxLength: 22
    },
    productname: {
        type: String,
        required: true,
    },
    comments: [
        {
          type: String,
          required: true
        }
      ]
});

export default mongoose.model("Review", reviewsSchema)