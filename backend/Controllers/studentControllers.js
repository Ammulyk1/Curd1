import userModel from "../Model/userModel.js";
import bcrypt from "bcryptjs"
export const getStudent=async(req,res)=>{
  let student;
  try{
  student=await userModel.find()
  }
  catch(e){}
  if(!student){
    res.status(400).json({
      message:"No data Found"
    })
  }

  res.status(200).json({student})
}
// export const getStudent=async(req,res)=>{
//   const {email}=req.params;
//   console.log("one")
//   let student;
//   try{
//     student=await userModel.findOne({email})
//   }
//   catch(e){}
//   if(!student){
//     res.status(400).json({
//       message:"No data found"
//     })
//   }
//   res.status(200).json({student
//   })
// }
export const postStudent=async(req,res)=>{
  const {name,email,password}=req.body
  let student1;
  try{
    student1=await userModel.findOne({email})
  }
   catch(e){}
   if(student1){
    res.status(400).json({
      message:"User already exist"
    })
   }
   const hashedPassword=bcrypt.hashSync(password)
   const newstudent=await userModel({
    name:name,
    email:email,
    password:hashedPassword
   })
   try{
   newstudent.save()
   }
   catch(e){}
   res.status(200).json({
    message:"new student"
   })
}
export const deleteStudent=async(req,res)=>{
  const email=req.param.email
  let studentEmail;
  try{
    studentEmail=await userModel.findOne({email})
    console.log("student",studentEmail)
  }catch(e){}
  if(!studentEmail){
    res.status(400).json({
      message:"user not found"
    })
  }
  try{
    await userModel.deleteOne({email})
  }
  catch(e){}
  res.status(200).json({
    message:"Student deleted"
  })
}
export const updateStudent=async(req,res)=>{
  const id=req.param.id
  const {name,email}=req.body
let student
try{
  console.log("first")
  student=await userModel.findByIdAndUpdate(id,{
    name,
    password,
    email
  })
  console.log("last")
}catch(e){}
if(!student){
  res.status(400).json({
    message:" No data found"
  })
}
res.status(200).json({
  student
})
}