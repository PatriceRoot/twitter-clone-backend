import data from "../data.js";

const user = data["current-user"];
export const getUser = (req, res) => {
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error getting current user" });
  }
};
