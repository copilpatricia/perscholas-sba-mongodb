import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
        enum: ["Clothes", "Shoes", "Accessories"]
    },
    color: {
        type: String,
        minLength: 3
    },
    size: {
        type: Number
    },
    inventory: {
        type: Boolean,
        default: true
    }
});

export default mongoose.model("Product", productsSchema);