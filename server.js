const express = require('express');
const app = express();
const path = require('path');
const videoroutes = require('./routes/VideoRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.static('public'));

app.use('/videos', videoroutes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(8080, () => console.log('The server is now listening on port 8080'));
