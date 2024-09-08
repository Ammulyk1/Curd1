import { Router } from "express"
import { deleteStudent, getStudent, postStudent, updateStudent } from "../Controllers/studentControllers.js"
const route=Router()
// route.get("/student",getStudent)
 route.get("/student/:email",getStudent) 
 route.post("/student",postStudent)   
 route.delete('/student/:email',deleteStudent)
 route.put('/student/:id',updateStudent)
  
export default route