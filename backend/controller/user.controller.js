import Message from "../model/message.model.js";
import User from "../model/user.model.js";

export const getUsersController = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    const loggedInUserId = req.user._id;

    const usersWithLastMessage = await Promise.all(
      users.map(async (user) => {
        const lastMessage = await Message.findOne({
          $or: [
            {
              senderId: loggedInUserId,
              receiverId: user._id,
            },
            {
              senderId: user._id,
              receiverId: loggedInUserId,
            },
          ],
        }).sort({ createdAt: -1 });

        return {
          ...user.toObject(),
          lastMessage,
        };
      }),
    );

    // Sort users by latest message
    usersWithLastMessage.sort((a, b) => {
      const dateA = a.lastMessage
        ? new Date(a.lastMessage.createdAt)
        : new Date(0);

      const dateB = b.lastMessage
        ? new Date(b.lastMessage.createdAt)
        : new Date(0);

      return dateB - dateA;
    });

    res.status(200).json(usersWithLastMessage);
  } catch (error) {
    console.log("Error in getUsersController:", error.message);

    res.status(500).json({
      error: "Internal server error!",
    });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete({ _id: userId });
    if (!deletedUser) {
      return res.status(404).json({
        error: "User not found",
      });
    }
    res
      .status(200)
      .json({ message: "User deleted successfully!", deletedUser });
  } catch (error) {
    console.log("Error in getUsersController:", error.message);

    res.status(500).json({
      error: "Internal server error!",
    });
  }
};
