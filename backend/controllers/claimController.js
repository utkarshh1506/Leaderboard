const History = require("../models/History");
const User = require("../models/User");

exports.claimPoints = async (req, res) => {
  const { userId } = req.params;
  const points = Math.floor(Math.random() * 10) + 1;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $inc: { totalPoints: points } },
      { new: true } 
    );

    if (!updatedUser) return res.status(404).json({ error: "User not found" });

    await History.create({ userId, points });

    res.json({ message: "Points claimed", user: updatedUser, points });
  } catch (err) {
    console.error("❌ Error in claimPoints:", err);
    res.status(500).json({ error: "Error claiming points" });
  }
};

exports.getLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });
    res.json(users);
  } catch {
    res.status(500).json({ error: "Could not fetch leaderboard" });
  }
};

exports.getUserPoint = async (req, res) => {
  try {
    const history = await History.find({ userId: req.params.userId }).sort({
      timestamp: -1,
    });
    res.json(history);
  } catch {
    res.status(500).json({ error: "Error fetching history" });
  }
};
