const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Data = new Schema(
    {
        idc: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        roomc:{
            type: Number,
            required: true,
        }

    },
    { timestamps: true }
);

const data = mongoose.model("data", Data);
module.exports = data;
