const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)

const CountSchema = mongoose.Schema({"_id": String, 
                                    userCount: Number});
const CountModel = mongoose.model("Visitor", CountSchema);

const ProjectSchema = mongoose.Schema({title: String, 
                                        techStack: String,
                                        content: String, 
                                        imgUrl: String, 
                                        demo: {type: String, 
                                                default: "N/A"}, 
                                        github: String});

const ProjectModel = mongoose.model("Project", ProjectSchema);

app.get("/getProjects", function(req, res){
        ProjectModel.find({})
            .then((response) => {
                res.send(response)
            })
            .catch((err) => {
                console.log(err);
            });
})

app.get("/getCount", function(req, res){
    CountModel.findOneAndUpdate({"_id": "count"}, { $inc: {userCount:1}}, {new: true })
        .then(() => {console.log("Updated");})

        .catch((err) => {console.log(err);});
    
    CountModel.find({"_id": "count"})
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.send(err);
        });
});

app.listen(PORT, ()=>{
    console.log("Express is running on port: 3001");
});