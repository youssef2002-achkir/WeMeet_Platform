const mongoose = require("mongoose");
const Joi = require("joi");

const groupSchema = new mongoose.Schema({
	Name: { type: String, required: true },
	Description: { type: String, required: true },
	Admin: { type: String, required: true },
});


const Group = mongoose.model("group", groupSchema);

const validate = (data) => {
	const schema = Joi.object({
		Name: Joi.string().required().label("Name"),
		Description: Joi.string().required().label("Description"),
		Admin: Joi.string().email().required().label("Admin"),
	});
	return schema.validate(data);
};

module.exports = { Group, validate };