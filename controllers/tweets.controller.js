import data from "../data.js";

export function getAllTweets(req, res) {
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error getting articles" });
  }
}

export function getOneTweet(req, res) {
  const id = req.params.id;
  try {
    const tweet = data.find((tweet) => tweet.id == id);
    res.status(200).json(tweet);
    if (!tweet) throw new Error("Tweet not found");
  } catch (error) {
    res.status(500).json({ message: "Error getting tweet" });
  }
}
