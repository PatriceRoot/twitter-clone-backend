import { Router } from "express";
import { getAllTweets } from "../controllers/tweets.controller.js";

const tweetsRoute = Router();
tweetsRoute.get("/", getAllTweets);

export default tweetsRoute;
