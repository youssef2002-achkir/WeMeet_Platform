const router = require("express").Router();
const { Group, validate } = require("../models/group");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const group = await Group.findOne({ Name: req.body.name });
		if (group)
			return res
				.status(409)
				.send({ message: "Group with given Name already Exist!" });

		//const salt = await bcrypt.genSalt(Number(process.env.SALT));
		//const hashAdmin = await bcrypt.hash(req.body.Admin, salt);

		new Group().save();
		res.status(201).send({ message: "Group created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;