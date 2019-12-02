// init express
const express = require('express');
let app = new express();


//creating first route 
app.get('/',function(req, res){
    res.send('successful test of the route');
});

// listening to a port 

var port = 12000;

app.listen(port, function(){
    console.log('listening on the  port : ' + port);
});