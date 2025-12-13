import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId(),
            ref: "Video"
        }
    ],
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, // From Claudinary
        required: true
    },
    coverImage: {
        type: String, // From Claudinary
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
    }
}, {timestamps: true})

export const User = mongoose.model("User", userSchema)