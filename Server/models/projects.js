const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
    _id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    owner:{
        type: String,
        required: true
    },
    team:{
        type: Array,
        required: true
    },
    category:{
        type: Array,
        required: true
    },
    dob:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Project_defaults', ProjectsSchema)