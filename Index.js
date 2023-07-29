const Express = require("express")
const mongoose = require("mongoose");
let data = require("./data/data");
const App = Express();
let bodyparser = require("body-parser");
App.use(bodyparser.json());
App.use("/",data)
let cors = require("cors");
App.use(cors());

mongoose.connect("mongodb+srv://sathishcharyssc:wnVp7CxJRXMHmQ3g@cluster0.oavc5fw.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected successfully");
})
.catch((err)=>{
    console.log(err);
})
App.listen(300,()=>console.log("server running 300"));