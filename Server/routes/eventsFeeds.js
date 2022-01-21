const router = require('express').Router();
const passport = require('passport');
const mongoose = require('mongoose');
const Events = require('../models/eventModel');
const Devs = require('../models/Devs')
const { json } = require('express');
const {v4 : uuid} = require('uuid');
const { route } = require('./projectsRoutes');


const uri = 'mongodb+srv://kaneki:chxllzGhGCWO5teH@sauce.scsrk.mongodb.net/Domeafavour?retryWrites=true&w=majority'

//todo-> mongoDB connections
mongoose.connect(uri, {useNewUrlParser: true})
const db = mongoose.connection;


//todo-> validations
db.on('error', (err)=>{ console.error(err)})
db.once('open', ()=>{ console.log('Event Feeds connected')})

//todo -> { getting all personalised}
router.get('/personal/:id', async (req, res)=>{
    console.log('');
    try {
        let dev = await Devs.findById(req.params.id)
        if(dev === null) res.status(404).json({message: "no preference found to be regress with!"});
        else{
            let events = await Events.find({tags: dev.category}).limit(20);
            if(events === null) res.status(404).json({message: "No event feeds found for you fuck off!"});
            else {
                //giving events accoording to preferences of user
                res.status(200).json(events);
            };
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})
//todo -> { getting all}
router.get('/', async (req, res)=>{
    try {
        let events = await Events.find()

    } catch (err) {
        
    }
})
//todo -> { get by id}
router.get('/:id', (req, res)=>{

})
//todo -> { get and delete}
router.delete('/:id', (req, res)=>{

})
//todo -> { get and update}
router.patch('/:id', (req, res)=>{

})
//todo -> { create and post}
router.post('/', (req, res)=>{

})
//todo -> { request to be in }
router.get('/request', (req, res)=>{

})

module.exports = router