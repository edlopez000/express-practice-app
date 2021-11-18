const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hello');
});

// Needed the path module to serve a static html file like nginx
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, './home.html'));
});

app.listen(port, () => console.log('Express started on localhost'));
