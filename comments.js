// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Read comments from file
let comments = JSON.parse(fs.readFileSync('comments.json'));

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// Routes
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  comments.push(req.body);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.json(comments);
});

// Start server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});