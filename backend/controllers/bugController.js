const Bug = require('../models/bugModel');

exports.submitBug = async (req, res) => {
  try {
    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (err) {
    res.status(500).json({ error: 'Error submitting bug' });
  }
};

exports.getAllBugs = async (req, res) => {
  try {
    const bugs = await Bug.find().sort({ createdAt: -1 });
    res.json(bugs);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching bugs' });
  }
};

// exports.updateBugs=async (req,res)=>{
//     const update=await bug.findAndUpdate();
// }