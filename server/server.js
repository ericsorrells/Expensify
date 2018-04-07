const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// serve up public folder
app.use(express.static(publicPath));

// handle all requests 
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// start server
app.listen(port, () => {
  console.log('Server is up!');
});