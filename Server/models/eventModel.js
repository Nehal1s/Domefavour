const { GoogleAuth } = require('google-auth-library');
const mongoose = require('mongoose');

const Events = new mongoose.Schema({
    _id:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    reputation_required: {
        type: String,
        required: true
    },
    bids:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true,
        default: "India"
    },
    likes: {
        type: String,
        required: false,
        default: "0"
    },
    body:{
        description:{
            type: String,
            required: true
        },
        tags:{
            type: Array,
            required: true
        },
        src:{
            type: String,
            required: false
        },

    },
    dob:{
        type: Date,
        required: true,
        default: Date.now
    },
    project_id:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Event_feeds', Events)