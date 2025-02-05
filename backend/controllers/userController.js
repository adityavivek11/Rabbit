import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { User } from '../models/Userschema.js';
import bcryptjs from 'bcryptjs'

export const Register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    // Basic validation
    if (!name || !username || !email || !password) {
      return res.status(401).json({
        message: "All fields are required.",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "User already exists.",
        success: false,
      });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user with hashed password
    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword, // Store hashed password
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully.",
      success: true,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error.",
      success: false,
    });
  }
};

export const Login = async (req,res) =>{
    try{
        const {email,password} = req.body ;
        if(!email || !password){
            return res.status(401).json({
                message:"All fields are required",
                success:false
            })
        };
        const user = await User.findOne({email}) ;
        console.log(user) ;
        if(!user){
            return res.status(401).json({
                message:"User does not exist with this email.",
                success:false
            })
        }
        const isMatch = await bcryptjs.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({
                message:"Incorrect email or password",
                success:false
            });
        }
        const tokenData = {
            userId:user._id
        }

        const token = jwt.sign(tokenData,"athlete") ;
        return res.status(201).cookie("token",token,{expiresIn:"1d",httpOnly:true}).json({message:`welcome back ${user.name}`,
                                                                                         success:"true"}) ;
    } catch(err){
        console.log(err)
    }
}

export const Logout = (req, res) => {
  return res
  .cookie("token", "", { expiresIn: new Date(Date.now()) })
  .json({
      message: "user logged out successfully.",
      success: true,
    });
};