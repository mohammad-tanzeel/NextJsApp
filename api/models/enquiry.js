const mongoose = require('mongoose');

// eslint-disable-next-line new-cap
const EnquirySchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique : true 
	},
	message: {
		type: String,
		required: true,
	}
});

module.exports = mongoose.model('Enquiry', EnquirySchema);