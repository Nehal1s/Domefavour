const router = require('express').Router();
const { rangeRight, forEach } = require('lodash');
const mongoose = require('mongoose');
const uri = 'mongodb+srv://kaneki:chxllzGhGCWO5teH@sauce.scsrk.mongodb.net/Domeafavour?retryWrites=true&w=majority'
const Project = require('../models/projects');






//todo-> mongoDB connections
mongoose.connect(uri, {useNewUrlParser: true})
const db = mongoose.connection;


//todo-> validations
db.on('error', (err)=>{ console.error(err)})
db.once('open', ()=>{ console.log('Project Connected')})




//MongoDb APIs
//todo-> getting all
router.get('/', async (req, res)=>{
    console.log("sadsad");
    try{
        const projects_defaults = await Project.find().limit(20)

        //todo:: this for removing project in one go { do not use } 
        // let i = 0;
        // projects_defaults.forEach(async element => {
        //     if(i>200) return false
        //     i++;
        //     let pro = await Project.findById(element._id)
        //     try{
        //         await pro.remove();
        //         console.log(`${i} removed suceesfully`);
        //     }catch(err){
        //         console.log(err.message);
        //     }
        // });

        res.status(200).json(projects_defaults);
    } catch(err){
        res.status(500).json({ message: err.message});
    }
})


router.get('/category/:category', async (req, res)=>{
    try{
        let fCat = await Project.find({category: req.params.category});
        if(fCat){
            res.status(200).json(fCat)
        }else{
            res.status(404).json({message: "not found!"})
        }
    }catch{
        res.status(500).json({message: "server error"})
    }


})



//todo-> getting one
router.get('/:id', getProjects, (req, res)=>{
    res.send(res.project);

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


router.get('/category', (req, res)=>{
    console.log("wtf");
//     let fCategory = {
//         category: req.body.category
//     }
//    try{
//     let State = await Project.find(fCategory)
//     if(State){
//         res.status(200).json(State);
//     }
//     else{
//         res.send(404).json({message: "No Porject on this category found!"});
//     }
//    }catch(err){
//        res.send(500).json({message: err.message})
//    }
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