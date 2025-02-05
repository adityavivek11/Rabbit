import express from "express";
import { createTweet } from "../controllers/tweetController.js";
import isAuthenticated from "../config/Auth.js"; // Ensure correct import path

const router = express.Router();

router.post("/create", isAuthenticated, createTweet);

export default router;
