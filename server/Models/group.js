const mongoose = require("mongoose");
const groupSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  admin: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Group", groupSchema);