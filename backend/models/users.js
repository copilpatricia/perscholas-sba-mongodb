import mongoose from 'mangoose';

const usersSchema = new mangoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 4,
        maxLength: 22
    },

    email: {
        type: String,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 25
    },

    age: {
        type: Number,
        min: 21,
        max: 100
    }

});

export default mongoose.model("User", usersSchema);