const router = require('express').Router();
const mongoose = require('mongoose');
const uri = 'mongodb+srv://kaneki:chxllzGhGCWO5teH@sauce.scsrk.mongodb.net/Domeafavour?retryWrites=true&w=majority'
const Project = require('../models/projects');






//todo-> mongoDB connections
mongoose.connect(uri, {useNewUrlParser: true})
const db = mongoose.connection;


//todo-> validations
db.on('error', (err)=>{ console.error(err)})
db.once('open', ()=>{ console.log('Connected to database')})




//MongoDb APIs
//todo-> getting all
router.get('/', async (req, res)=>{
    try{
        const projects_defaults = await Project.find()
        res.send(projects_defaults);
        projects_defaults.forEach(ele =>{})
    } catch(err){
        res.status(500).json({ message: err.message});
    }
})





//todo-> getting one
router.get('/:id', getProjects, (req, res)=>{
    res.send(res.project.name);

})





//todo-> creating one
router.post('/', async (req, res)=>{
    console.log(req.body);
    const project = new Project({
        id: req.body.id,
        name: req.body.name,
        owner: req.body.owner,
        team: [req.body.makersid],
        category: [req.body.category]
    });

    try{
        const newProject = await project.save()
        res.status(201).json(newProject);
    }catch(err){
        res.status(400).json({message: err.message});
    }
})





//todo-> uppdating one
router.patch('/:id', getProjects, (req, res)=>{
    res.send(`hello world: ${req.params.id}`)

})




//todo-> deleting one
router.delete('/:id', getProjects, async (req,res)=>{
   try{
       await res.project.remove()
       res.status(200).json({message: "Project Removed successfully!"});
   }catch(err){
       res.status(500).json({message: err.message});
   }


})


async function getProjects(req, res, next){
    console.log(req.params.id);
    let project;
    try{
        project = await Project.findById(req.params.id)
        if(project == null){
            return res.status(404).json({message: "Cannot find Project!"});
        }
    }catch(err){
        return res.status(500).json({message: err.message});
    }
    res.project = project
    next();
}


module.exports = router