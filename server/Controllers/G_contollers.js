const Group = require("../Models/group");
const getGroups = async (req, res) => {
  let Groups;
  try {
    Groups = await Group.find();
  } catch (err) {
    console.log(err);
  }

  if (!Groups) {
    return res.status(404).json({ message: "No Groups found" });
  }
  return res.status(200).json({ Groups });
};
const addGroups = async (req, res) => {
  const { title, date, place } = req.body;
  let group;
  try {
    group = new Group({
      title,
      date,
      place,
    });
    await group.save();
  } catch (err) {
    console.log(err);
  }
  if (!group) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ group });
};
module.exports = {
    getGroups,
    addGroups,
  };