const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  console.log(req.body);
  const moves = ['T', 'T', 'L', 'T','R','T','F','T','T'];
  
  // TODO add your implementation here to replace the random response
  
//   moves.forEach((item)=> res.send(item));
  
  res.send(moves[Math.floor(Math.random() * moves.length)]);
});

app.listen(process.env.PORT || 8080);
