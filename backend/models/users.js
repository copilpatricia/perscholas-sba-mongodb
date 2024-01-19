import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 8;

const usersSchema = new mongoose.Schema({
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
}, {
    timestamps: true
});

//indexes
usersSchema.index({username: 1 });
usersSchema.index({email: 1});

// hide the password
usersSchema.pre('save', async function(next){
    // if the password has not change continue
    if(!this.isModified("password")) return next();
  
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next()
  })

export default mongoose.model("User", usersSchema);