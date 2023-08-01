const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/portfolio");

const CountSchema = mongoose.Schema({"_id": String, userCount: Number});
const CountModel = mongoose.model("Visitor", CountSchema);

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

app.listen(3001, ()=>{
    console.log("Express is running on port: 3001");
});