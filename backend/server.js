import express from "express"
import route from "./Routes/studentRoutes.js"
import connect from "./Database/conn.js"
import dotenv from "dotenv"
const app=express()
dotenv.config()
app.use(express.json())
 app.use("/api",route)

 connect().then(()=>{
   app.listen(3000,()=>{console.log("server created")})
 })
.catch((err)=>{console.log(err)})