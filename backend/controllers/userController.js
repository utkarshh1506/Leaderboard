const User = require("../models/User");

exports.getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      return res.status(400).json({
        message: "No User found",
      });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.addNewUser = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  try {
    const user = await User.create({ name });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: "User may already exist or server error" });
  }
};
