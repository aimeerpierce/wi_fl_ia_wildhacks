/*Load HTTP Library */
var http = require("http");

/*Create http server to handle responses */
http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type": "text/plain"});
	response.write("Hello Wildhacks");
	response.end();
}).listen(8888);
