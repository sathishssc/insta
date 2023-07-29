let express = require("express");

let data = express.Router();
let instaClone = require("./model/model");
data.get("/data",(req,res) =>{
  try{
    instaClone.find().then(dat =>{
        res.status(200).json({
            messege:"data fetched successfully",
            data:dat,
        })
    }).catch(err =>{
        res.status(300).json({
            messege:"data not found",
            err:err,
        })
    })
  }catch(err){
     res.status(500).json({
        messege:"something went wrong",
     })
  }
})

data.post("/createPost", (req,res) =>{
    let {name,location,likes,description,postImage} = req.body;
    let insta = new instaClone({
        name:name,
        location:location,
        likes:likes,
        description:description,
        postImage:postImage,
        date:new Date(),
    })
    insta.save().then(d =>{
        res.status(200).json({
            messege:"post creation successfully",
            data:d,

        })
    }).catch(err =>{
        res.status(300).json({
            messege:"data fetched failed",
            error:err,
        })
    })
})
module.exports = data;