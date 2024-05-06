import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

const { PORT } = process.env;
app.listen(PORT);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});
