import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config({
  path: "../config/.env"
});

const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    console.log("Token received:", token);

    if (!token) {
      return res.status(401).json({
        message: "User not authenticated.",
        success: false
      });
    }
  console.log(process.env.JWT_SECRET)
    const decode = await jwt.verify(token, process.env.JWT_SECRET); // Use secret from .env
    console.log("Decoded token:", decode);

    req.user = decode.userId; // Ensure this matches the payload of the JWT
    next(); 
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      message: "Invalid token.", 
      success: false
    });
  }
};

export default isAuthenticated;
