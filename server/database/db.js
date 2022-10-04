import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Connection = ()=>{
const MONGO_URI=`mongodb+srv://${USERNAME}:${PASSWORD}@hitesh.fatyu.mongodb.net/?retryWrites=true&w=majority`

  mongoose.connect(MONGO_URI,{useNewUrlParser:true})

  mongoose.connection.on('connected',()=>{
    console.log('Database Connected Successfully');
  })
  mongoose.connection.on('disconnected',()=>{
    console.log('Database Disconnected');
  })
  mongoose.connection.on('error',()=>{
    console.log('Error while connecting the Database',error.message);
  })
}

export default Connection;