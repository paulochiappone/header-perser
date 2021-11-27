//Basic required imports for NodeJS
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');  
//Used for easy parsing of user-agent for response  
//Create an instance of express for our app and instantiate bodyParser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());   

//Api url
var api = '/api/whoami';

app.get(api, function(req, res, next){
    var language =  req.acceptsLanguages();
    var software = req.get('User-Agent');
    // req.headers{'user-agent'}; Same way of getting data for software
    var ipaddress = req.ip;

    res.json({'ipaddress': ipaddress, 'language': language[0], 'sofware': software});
    console.log('100');

});

app.listen(3000, function(){
    console.log("working");
});

}
