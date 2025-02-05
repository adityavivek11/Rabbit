import { Tweet } from "../models/tweetSchema.js";

export const createTweet = async (req, res) => {
  try {
    const { description } = req.body;

    if (!description) {
      return res.status(400).json({
        message: "Description is required.",
        success: false,
      });
    }
    console.log(req.user) ;
    if (!req.user) {
      return res.status(401).json({
        message: "User not authenticated.",
        success: false,
      });
    }

    await Tweet.create({
      description,
      userId: req.user, 
    });

    return res.status(201).json({
      message: "Tweet created successfully.",
      success: true,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong. Please try again later.",
      success: false,
    });
  }
};
