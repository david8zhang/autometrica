var async = require('async');
var util  require('util');
var gcm = require('node-gcm');

exports.handler = function(event, context) {
	async.waterfall([
		function upload(next) {
			var message = new gcm.Message();
			var reg_token = "###"; 
			var API_KEY = "AIzaSyDfF52tbpsf7VYrYRN_m2X3JAy2HbTvOHs";
			regTokens.push(reg_token);
			var sender = new gcm.Sender(API_KEY);
			sender.send(message, {registrationTokens: regTokens}, function(err, response) {
				if(err) console.log(err);
				else console.log(response);
			})
		}
	], function(err) {
		if (err) {
			context.fail(err);
		} else {
			context.succeed("Success!");
		}
	})
}