var express = require('express');
var app = express()

var PORT = process.env.PORT || 3000;


app.get('/',function(req,res){
	res.status(200).send({
        ipaddress : req.connection.remoteAddress,
        language : req.headers.language,
        software : req.headers.host
    })
})

app.listen(PORT,function(){
	console.log("Server running at "+ PORT);
});

