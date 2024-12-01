import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requried: true,
        unique: true,
    },
    email: {
        type: String,
        requried: true,
        unique: true,
    },
    password: {
        type: String,
        requried: true,
    },
    profilePicture:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwiAcG6MjtLWcbQCTYEiq4D1IvxD6TlHcqqL9NNfNxK0ARDuv10woflTHDkg&s",
    },
}, { timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;