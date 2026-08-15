import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/tokenGenerate.js";
export const signupController = async (req, res) => {
  try {
    const {
      fullname,
      username,
      password,
      confirmPassword,
      gender,
      profilePic,
    } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match!" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exists!" });
    }

    //Hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Auto genarate profile Pic
    const boyProfilePic = `https://avatarapi.runflare.run/public/boy?usearname=[${username}]`;
    const girlProfilePic = `https://avatarapi.runflare.run/public/girl?usearname=[${username}]`;
    const othersProfilePic = `https://avatarapi.runflare.run/public/general?usearname=[${username}]`;

    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic:
        gender === "male"
          ? boyProfilePic
          : gender === "female"
            ? girlProfilePic
            : othersProfilePic,
    });

    if (newUser) {
      await newUser.save();
      generateTokenAndSetCookie(newUser._id, res);
      res.status(201).json({
        fullname: newUser.fullname,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
        message: "User created sussfully!",
      });
    } else {
      res.status(400).json({ error: "Invalid user data." });
    }
  } catch (error) {
    console.error("Error in signup Controller ", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPassword = await bcrypt.compare(password, user?.password || "");
    if (!user || !isPassword) {
      return res.status(400).json({ error: "Invalid username or password!" });
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
      message: "Logged in successfully!",
    });
  } catch (error) {
    console.error("Error in login controller ",error.message);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const logoutController = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully!" });
  } catch (error) {
    console.log("Error in logout controller ", error.message);
    res.status(500).json({ error: "Internal server error!" });
  }
};
