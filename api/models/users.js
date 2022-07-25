const mongoose = require('mongoose');

// eslint-disable-next-line new-cap
const UsersSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique : true 
	},
	password: {
		type: String,
		required: true,
	},
	token: { type: String },
	refresToken: { type: String }
	
});

// function validateUser(user) {
//     const schema = {
//         name: Joi.string().min(5).max(50).required(),
//         email: Joi.string().min(5).max(255).required().email(),
//         password: Joi.string().min(5).max(255).required()
//     };
//     return Joi.validate(user, schema);
// }

module.exports = mongoose.model('Users', UsersSchema);