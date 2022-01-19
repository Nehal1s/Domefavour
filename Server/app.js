const express = require('express')
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors')
const passportSetup = require("./passport");
const authroutes = require('./routes/auth')
const projectsRoutes = require('./routes/projectsRoutes');
const { post } = require('./routes/auth');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3000;



//middleware
app.use(cookieSession(
    {
        name: 'session',
        keys: ['lama'],
        maxAge: 24 * 60 * 60 * 1000,
    }
))

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
    credientials: true
}))

//Express use
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use('/auth', authroutes);
app.use('/project', projectsRoutes);


app.get('/', (req, res)=>{
    res.status(200).json({
        Title: "This is a documentation for sharma!",
        event_feeds: {
            title: "they're still under development but you can access them on route",
            for_Get_all: {
                Get: "/project",
                resType: "Array",
                Response: [
                    {
                        "_id": "Mongo_id",
                        "id": "Custom_id",
                        "name": "example",
                        "owner": "owner_id",
                        "team": [
                          "Project_Name"
                        ],
                        "category": [
                          "Prefrences or categoried (if any)"
                        ],
                        "dob": "date of craetion",
                        "__v": 0
                      }
                    ],

            },
            for_Get_one:{
                Get: "/project/:id",
                resType: "json",
                Response: {
                            "_id": "Mongo_id",
                            "id": "Custom_id",
                            "name": "example",
                            "owner": "owner_id",
                            "team": [
                            "Project_Name"
                            ],
                            "category": [
                            "Prefrences or categoried (if any)"
                            ],
                            "dob": "date of craetion",
                            "__v": 0
                      },

            },
            for_Get_category: {
                Get: "/project/category:category",
                resType: "Array",
                Response: [
                    {
                        "_id": "Mongo_id",
                        "id": "Custom_id",
                        "name": "example",
                        "owner": "owner_id",
                        "team": [
                          "Project_Name"
                        ],
                        "category": [
                          "Prefrences or categoried (if any)"
                        ],
                        "dob": "date of craetion",
                        "__v": 0
                      }
                    ],

            },
            for_delete_one: "/project/:id",
            for_Creating: {
                Post: "/project/",
                resType: "json",
                request: {
                    "name":"Project_name",
                    owner: "owner _name",
                    category:["category or prefrences"]

                },
                Response: {
                        "_id": "Mongo_id",
                        "id": "Custom_id",
                        "name": "example",
                        "owner": "owner_id",
                        "team": [
                          "Project_Name"
                        ],
                        "category": [
                          "Prefrences or categoried (if any)"
                        ],
                        "dob": "date of creation",
                        "__v": 0
                    }
            },
            
        },
        user_feeds: {
            title: "they're still under development but you can access them on route",
            for_Get_all: "/auth/all",
            for_Get_one: "/auth/dev/:id",
            for_Get_category: "/auth/category/:id_Category",
            for_delete_one: "/auth/:id",
            for_Creating :{
                Post: "/auth/dev",
                resType: "json",
                request: {
                    "name":"Developer name",
                    prefrences:["category or prefrences"],
                    pfp: "a string link to a image or src"

                },
                Response: {
                        "_id": "Mongo_id",
                        "id": "Custom_id",
                        "name": "example",
                        status: {
                            onproject: "true/false",
                            extra: "ofcourse if you want"
                        },
                        pfp: "a string link to a image or src",
                        prefrences: [
                          "Prefrences or categoried (if any)"
                        ],
                        "dob": "date of creation",
                        "__v": 0
                    }
            },
        },
        Profile: {
            title: "data can be available on /profile 'Content-type: application/json'",
            Note: "Be aware it is a json as you have requested so it comes with status code as well, so be sure check on them as well",

        }
    })
})

app.get('/profile', (req, res)=>{
    console.log(`Data be like:=> ${req.body}`);
    res.render('profile')
})
app.get('/login', (req, res)=>{
    res.render('login');
})
app.listen(PORT, ()=>{
    console.log(`running server on ${PORT}`);
})