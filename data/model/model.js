
let mogoose = require("mongoose");


let data = mogoose.Schema({
    name:{type:String},
    location:{type:String},
    likes:{type:Number},
    description:{type:String},
    postImage:{type:String},
    date:{type:Date}
})

let instaClone = mogoose.model("instaClone",data)

module.exports = instaClone;