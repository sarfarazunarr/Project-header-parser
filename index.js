require('dotenv').config();
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); 

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
  
});
app.get('/api/whoami', function (req, res) {
  const ip_address = req.ip;
  const language = req.get('Accept-Language');
  const software = req.get('User-Agent');

  res.json({ ip_address, language, software });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
