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
        let events = await Events.find().limit(20)
       
        res.status(200).json(events);

    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
//todo -> { get by id}
router.get('/:id', getEvent, async (req, res)=>{
   if(res.event){
       res.status(200).json(res.event);
   }else{
       res.status(404).json({message: "Post not found!"});
   }

})
//todo -> { get and delete}
router.delete('/:id', getEvent, (req, res)=>{
    if(res.event){
        res.event.remove()
    }else{
        res.status.json({message: "Failed to delete the psost may be you're a doppelgengor or whatever!"});
    }

})
//todo -> { get and update}
router.patch('/:id', getEvent, (req, res)=>{
    res.status(200).json(res.event);
})
//todo -> { create and post}
router.post('/', async (req, res)=>{
    
    let event = new Events({
        _id: uuid().split('-')[0],
        title: req.body.title,
        owner: req.body.owner,
        body: {
            description: req.body.desc,
            tags: req.body.tags,
            src: req.body.src
        },
        project_id: req.body.project_id
    })
})
//todo -> { request to be in }
router.get('/request', (req, res)=>{
    
})

async function getEvent(req, res, next){
    console.log(req.params.id);
    let event;
    try{
        event = await Events.findById(req.params.id)
        if(event == null){
            return res.status(404).json({message: "Cannot find Project!"});
        }
    }catch(err){
        return res.status(500).json({message: err.message});
    }
    res.event = event
    next();
}


module.exports = router