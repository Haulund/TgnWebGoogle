const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: String
}, {
    timestamps: true
});

const Instructor = mongoose.model('Instructor', instructorSchema)

module.exports = Instructor;