const mongoose = require("mongoose");
const eventSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});
module.exports = mongoose.model("Event", eventSchema);