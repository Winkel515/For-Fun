const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const port = 80;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log('Server is ready on port 80');
});
