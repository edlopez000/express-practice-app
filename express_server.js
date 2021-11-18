const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hello dawg');
});

app.listen(port, () => console.log('Express started on localhost'));
