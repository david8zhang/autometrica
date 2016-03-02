var AWS = require('aws-sdk');
var sha1 = require('sha-1');
var docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'});

exports.createData = function(req, res) {
	var params = {};
	params.TableName = '';
}

exports.getData = function(req, res) {
	var params = {};
	params.TableName = '';
}