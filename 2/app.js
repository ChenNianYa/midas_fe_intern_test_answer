var http = require("http");
var onRequest = function(request,response){
    response.setHeader('Content-Type', 'application/json');
    if(request.url==='/success'){
        response.statusCode = 200;
        response.end(JSON.stringify({
            message:'请求成功'
        }));
    }else if(request.url==='/fail'){
        response.statusCode = 500;
        response.end(JSON.stringify({
            message:'服务器异常'
        }));
    }
}

var server = http.createServer(onRequest);

server.listen(3000,"127.0.0.1");
console.log("server started on localhost port 3000");