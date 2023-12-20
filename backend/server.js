const express = require("express");
const chats = require("./data/data.js");

const app = express();

app.get("/",(req,res)=>{
    res.send("API is running properly..");
});

app.get("/api/chat",(req,res)=>{
    res.send(chats);
});

app.get("/api/chat/:id",(req,res)=>{
    // console.log(req.params.id);
    // find a single chat with id == req.params.id
    // const singlechat = chats.find((c) => c._id === req.params.id);
    // res.send(singlechat);
    let temp = 0;
    console.log(chats.length);
    for (let i = 0, len = chats.length; i < len; i++) {
        //if _id in dict chats[i] is same as req.params.id, show it
        if(chats[i]._id === req.params.id){
            res.send(chats[i]);
            temp =1;
            break;
        }
    }

    if(temp==0){
        res.send("No group has requested chat id");
    }
    
});


app.listen(1786,console.log("Server started on port 1786"));