import User from "../model/user.model.js";

export const getUsersController = async (req, res) => {
  try {
    const getUser = await User.find().select("-password");
    res.status(200).json(getUser);
  } catch (error) {
    console.log("Error in getUsersController ", error.message);
    res.status(500).json("Internal server error!");
  }
};
