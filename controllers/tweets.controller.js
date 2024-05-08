import data from "../data.js";

export function getAllTweets(req, res) {
  try {
    res.status(200).json(data.tweets);
  } catch (error) {
    res.status(500).json({ message: "Error getting articles" });
  }
}

export const postAllTweets = (req, res, next) => {
  try {
    let id = Math.round(Math.random() * 100000).toString();
    console.log(req.body);
    data.tweets.push({ id, ...req.body });
    res.json({ id, ...req.body });
  } catch (error) {
    res.status(404).send({ message: "Failed to add new tweet" });
  }
};
