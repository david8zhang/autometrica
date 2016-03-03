var AWS = require('aws-sdk');
var sha1 = require('sha-1');
var docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-1'});

/** CREATE a new Data entry. */
exports.createData = function(req, res) {
	var params = {};
	var scale = req.body.scale;
	var data_id = sha1(Math.floor(Date.now()/1000).toString());
	var data_timestamp = Math.floor(Date.now()/1000).toString();
	params.TableName = 'autometrica-data';
	params.Item = {
		data_id: data_id,
		data_timestamp: data_timestamp,
		scale: scale
	}
	docClient.put(params, function(err, data) {
		if(err) {
			res.send(err);
		} else {
			var response = {};
			response.id = data_id;
			res.send(response);
		}
	})

};

/** GET a data entry. */
exports.getData = function(req, res) {
	var params = {};
	var data_id = req.query.data_id;
	params.TableName = 'autometrica-data';
	params.FilterExpression = "data_id = :data_id";
	params.ExpressionAttributeValues = {
		":data_id" : data_id
	};
	docClient.scan(params, function(err, data) {
		if(err) {
			res.send(err);
		} else {
			res.json(data);
		}
	})

};