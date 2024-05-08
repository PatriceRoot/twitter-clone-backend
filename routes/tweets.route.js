import { Router } from "express";
import {
  getAllTweets,
  postAllTweets,
} from "../controllers/tweets.controller.js";

const tweetsRoute = Router();
tweetsRoute.get("/", getAllTweets);
tweetsRoute.post("/", postAllTweets);

export default tweetsRoute;
