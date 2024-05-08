import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import tweetsRoute from "./routes/tweets.route.js";
import userRoute from "./routes/user.route.js";
import allUsersRoute from "./routes/allUsers.route.js";
const app = express();
dotenv.config();

const { PORT } = process.env;
app.use(cors());
app.use(express.json());

app.use("/tweets", tweetsRoute);
app.use("/user", userRoute);
app.use("/users", allUsersRoute);

app.listen(PORT, (req, res) => {
  console.log(`server is running on http://localhost:${PORT}`);
});
