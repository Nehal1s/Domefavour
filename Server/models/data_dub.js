const mongoose = require('mongoose');
const faker = require('@faker-js/faker');
const Devs = require('./eventModel');
const Project = require('./projects')
const {v4 : uuid} = require('uuid');





const uri = 'mongodb+srv://kaneki:chxllzGhGCWO5teH@sauce.scsrk.mongodb.net/Domeafavour?retryWrites=true&w=majority'

//todo-> mongoDB connections
mongoose.connect(uri, {useNewUrlParser: true})
const db = mongoose.connection;


//todo-> validations
db.on('error', (err)=>{ console.error(err)})
db.once('open', ()=>{ console.log('Connected to database in auths');
    god();
})

async function god(params) {
    console.log("we'll successed");
    const projects = await Project.find().limit(200)
    for (let i = 10; i<200;i++){
        // let id = uuid().split('-')[0];
        console.log(projects[i]);
        const dev = new Devs({
            _id: uuid().split('-')[0],
            title: faker.company.companyName(),
            owner: projects[i].owner,
            reputation_required: Math.floor((Math.random() * 5) + 1),
            bids: Math.floor((Math.random() * 10) + 1),
            location: faker.address.country(),
            likes: Math.floor((Math.random() * 1010) + 1),
            body: {
                description: faker.lorem.slug(),
                tags: projects[i].category,
                src: faker.image.imageUrl()
            },
            project_id: projects[i]._id
        })
        await dev.save()
        .then(proRef => {
            console.log(`${proRef} has been added`);
        })
    }
}
async function dlt(params) {
    let events = await Devs.find()
    events.forEach(async ele => {
        const event = await Devs.findById(ele._id)
        await event.remove()
        console.log('Done!');
    });
}