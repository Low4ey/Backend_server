const mongoose = require('mongoose');

const testSchema = new mongoose.Schema(
    {
        Name: { type: String },
        email: { type: String },
        pass: { type: String },
        class: { type: Number }
    }
)

module.exports=mongoose.model("Test",testSchema)