import data from "../data.js";

export function getAllTweets(req, res) {
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error getting articles" });
  }
}

export function get(params) {}
