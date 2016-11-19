/*Load HTTP Library */
var http = require("http");
var express = require('express');Demographic_Statistics_By_Zip_Code.csv
var csv = require("fast-csv");
var app = express();

app.get('main.js', function(req,res){
	res.sendfile('.main.js');
});

var PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log("Server is listening to http://localhost/ on port "+PORT);

csv
	.fromPath("Demographic_Statistics_By_Zip_Code.csv")
	.on("data", function(data){
		console.log(data);
	})
	.on("end", function(){
		console.log("done");
	});
