const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please provide an Email!"],
            unique: [true, "Email Exist"],
            validate:{
                validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email",

            },
            
        },
            userName: {
            type: String,
            required: [true, "Please provide a userName!"],
            unique: [true, "userName Exist"],
            minlength: [8, "user name must be 8 characters of longer"],

        },

        password: {
            type: String,
            required: [true, "Please provide a password!"],
            unique: false,
            minlength: [8, "Password must be 8 characters of longer"],

        },
    },
        { timestamps: true}

);
module.exports.User = mongoose.model("User", UserSchema);