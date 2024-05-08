import data from "../data.js";

const { tweets } = data;

export const getAllUsers = (req, res) => {
  try {
    if (!tweets) throw new Error("Impossible to find this user");
    const user = req.params.user;
    const tweet = tweets.filter(
      (tweet) => tweet.tweet_content.tweet_authors == user
    );
    res.status(200).json({ userInfo: tweet[0].user, tweets: tweet });
  } catch (error) {
    res.status(500).json({ message: "Impossible to find this user" });
  }
};
