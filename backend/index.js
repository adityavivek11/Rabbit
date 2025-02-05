import express from 'express';
import dotenv from 'dotenv' ;
import connectDB from './config/database.js';
import cookieParser from 'cookie-parser'
import userRoute from './routes/userRoute.js'
import tweetRouter from './routes/tweetRoute.js'


const app = express();

dotenv.config() ;
connectDB() ;
const PORT = process.env.PORT || 3000;
console.log(dotenv.config()) ;


app.use(express.json()) ;
app.use(express.urlencoded({extends:true}));
app.use(cookieParser()) ;





app.use("/api/v1/user",userRoute) ;
app.use("/api/v1/tweet",tweetRouter) ;

app.get("/home",(req,res)=>{
 res.json({
    message:"you are the best"
 })
})



app.listen(PORT, () => {   
        console.log(`The server is running on port ${PORT}`);    
});