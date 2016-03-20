var async = require('async');
var util = require('util');
var gcm = require('node-gcm');
var regTokens = [];

exports.handler = function(event, context) {
	async.waterfall([
		function upload(next) {
			var message = new gcm.Message();
			var reg_token = "ef70SOCoG1E:APA91bG7IbFHwe5yrEbELVv6WmCMZMOq-EnDXVTzlsBPdG5UoJD5mQxdQvSvhdt_cjlP-Gvq3Qv7n3ReQW7zwMAa0KNH6jFL6g_hqHniwiQ8P_BdYmwbIlDqBbwsGge6GiAPtefNIloD"; 
			var API_KEY = "AIzaSyC9AaQPHRfB6-418kyV_swuROqty0kGKbM";
			regTokens.push(reg_token);
			var sender = new gcm.Sender(API_KEY);
			sender.send(message, {registrationTokens: regTokens}, function(err, response) {
				if(err) {
					context.fail(err);
				}
				else {
					context.succeed(response);
				}
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