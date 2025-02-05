import mongoose from "mongoose";
import dotenv from 'dotenv' ;

dotenv.config({
    path:"../config/.env"
}) ;
const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL) ;
        console.log("MongoDB Connected Successfuly....");
    }
    catch(error){
        console.log(error);
    }
}
export default connectDB ; 