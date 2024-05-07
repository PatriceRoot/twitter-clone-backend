import data from "../data.js";

const { tweets } = data;

export const getAllUsers = (req, res) => {
  try {
    if (!tweets) throw new Error("Tweets not available");
    const user = req.params.user;
    const tweet = tweets.filter((t) => t.tweet_content.tweet_authors === user);
    res.status(200).json(tweet);
  } catch (error) {}
};
