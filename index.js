// import express from "express";

const  express = require("express")
const fs = require("fs")
const path = require("path");
//path
const dirpath = path.join(__dirname,"timestamps");
console.log("dirpath",dirpath)

//intial express server

const app = express()

//middlewars
app.use(express.static("timestamps"))

//api's

app.get("/",(req, res)=>{
    res.send("server working sucessfully")
})

app.get("/static",(req,res)=>{
    let time = new Date();
    let dateString = time.toUTCString().slice(0,-3);
    let content =`Last update timestamp is ${dateString}`

    fs.writeFileSync(`${dirpath}/date-time.txt`,content,(err)=>{
        if(err){
            console.log("err")

        }else{
            console.log("file created sucessfully")
        }
    })
    res.sendFile(path.join(path.join(__dirname,"timestamps/date-time.txt")))
})

// set server to listen under port :9000


app.listen(9000,()=>console.log("server started in localhost:9000"))