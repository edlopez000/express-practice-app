const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
  res.send("hello but i'm also testing nodemon");
});

// Needed the path module to serve a static html file like nginx
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../home.html'));
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log('Express started on localhost'));
