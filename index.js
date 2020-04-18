const express = require('express')
const mongoclient = require('mongodb').MongoClient
const app = express()
const port = 3002
app.get("/",(req,res)=>{
    res.send("Hello world")
})
app.get("/api/videos",(req,res)=>{
    mongoclient.connect("mongodb://localhost:27017",(err,client)=>{
        var database = client.db("Test1")
        database.collection("Videos",(err,collection)=>{
            collection.find().toArray((err,result)=>{
                res.header('Access-Control-Allow-Origin',"*")
                res.json(result)
                //database.close()
            })
        })
    })
})


















app.listen(port,()=>{
    console.log("starting the server")
})
