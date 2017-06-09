var express = require('express');
var app = express()

var PORT = process.env.PORT || 3000;


app.get('/',function(req,res){
	res.status(200).send({
        ipaddress : req.connection.remoteAddress,
        language : req.headers['accept-language'],
        software : req.headers['user-agent']
    })
})

app.listen(PORT,function(){
	console.log("Server running at "+ PORT);
});

