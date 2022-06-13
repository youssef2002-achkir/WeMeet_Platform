const router = require("express").Router();
const { Group } = require("../models/group");


router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const group = await Group.findOne({ admin: req.body.email });
		if (!group)
			return res.status(401).send({ message: "Invalid Email" });

		const validName = await compare(
			req.body.name,
			group.name
		);
		if (!validName)
			return res.status(401).send({ message: "Invalid Name" });

		const token = group.generateAuthToken();
		res.status(200).send({ data: token, message: "Created successfully" });
	} 
	catch (error) {
		res.status(500).send({ message: error.message });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		admin: Joi.string().email().required().label("admin"),
		name: Joi.string().required().label("name"),
	});
	return schema.validate(data);
};

module.exports = router;