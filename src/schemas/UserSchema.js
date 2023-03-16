const { Schema, model } = require('mongoose');
const bcrypt = require('mongoose-bcrypt');

const userModel = new Schema(
    {
        identity: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
            bcrypt: true,
        },
        dateCreated: {
            type: Date,
            default: Date.now,
        },
        enable: {
            type: Boolean,
            default: true,
        },
    },
    { versionKey: false },
);

userModel.plugin(bcrypt);
const modelUser = model('User', userModel);
module.exports = modelUser;
