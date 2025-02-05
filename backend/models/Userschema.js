import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true 
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    name:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true 
    },
    followers:{
        type:Array,
        default:[] 
    },
    following:{
        type:Array,
        default:[] 
    },
},{timestamps:true})

export const User = mongoose.model('User',UserSchema)