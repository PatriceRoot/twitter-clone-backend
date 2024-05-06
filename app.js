import express from "express";
import dotenv from "dotenv";
import tweetsRoute from "./routes/tweets.route.js";
const app = express();
dotenv.config();

const { PORT } = process.env;

app.use("/tweets", tweetsRoute);

app.listen(PORT, (req, res) => {
  console.log(`server is running on http://localhost:${PORT}`);
});
