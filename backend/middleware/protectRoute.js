import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({
        error: "Unauthorized! Token is not passed!",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        error: "User not found!",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectRoute:", error.message);

    return res.status(401).json({
      error: "Unauthorized! Invalid or expired token!",
    });
  }
};

export default protectRoute;
