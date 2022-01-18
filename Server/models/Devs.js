const mongoose = require('mongoose');

const Devs = new mongoose.Schema({
    name: {
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
