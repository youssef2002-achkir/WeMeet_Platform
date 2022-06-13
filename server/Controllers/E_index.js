const Event = require("../Models/event");
const getEvents = async (req, res) => {
  let Events;
  try {
    Events = await Event.find();
  } catch (err) {
    console.log(err);
  }

  if (!Events) {
    return res.status(404).json({ message: "No Events found" });
  }
  return res.status(200).json({ Events });
};
const addEvents = async (req, res) => {
  const { title, date, place,image } = req.body;
  let event;
  try {
    event = new Event({
      title,
      date,
      place,
      image,
    });
    await event.save();
  } catch (err) {
    console.log(err);
  }
  if (!event) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ event });
};
module.exports = {
    getEvents,
    addEvents,
  };