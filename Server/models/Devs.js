const mongoose = require('mongoose');

const Devs = new mongoose.Schema({
    _id:{
        type: String,
        required: true
    },
    category:{
        type: Array,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    pfp:{
        type: String,
        required: false
    },
    status:{
        type: Object,
        required: true,
    },
    dob:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Developer_defaults', Devs)
