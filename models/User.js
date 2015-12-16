var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
		id: String,
		access_token: String,
		username: String,
		password: String,
		firstName: String,
		lastName: String,
		email: String,
		access_token: String
});