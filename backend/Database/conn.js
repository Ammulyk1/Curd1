import mongoose from "mongoose";
async function connect(){
 await mongoose.connect(process.env.MongoDB_URl)
}
export default  connect