import { Router } from "express";
import { getAllTweets, getOneTweet } from "../controllers/tweets.controller.js";

const tweetsRoute = Router();
tweetsRoute.get("/", getAllTweets);

// tweetsRoute.post("/", postTweets);

export default tweetsRoute;
