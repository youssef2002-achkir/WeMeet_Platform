const express = require("express");
const { getEvents, addEvents } = require("../Controllers/E_index");
const router = express.Router();
router.get("/Events_b", getEvents);
router.post("/addEvents", addEvents);
module.exports = router;