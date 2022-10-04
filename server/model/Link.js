import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
  data:{
    type:String,
    required:true
  },
  visited:{
    type:Boolean,
    default:false
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
})

const link = mongoose.model('link',LinkSchema);

export default link