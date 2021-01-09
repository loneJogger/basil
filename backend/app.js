//import packages
const express = require('express');

//init express
const app = express();

//test route
app.get('/test', (req, res) => {
  res.send('backend is live');
});

//enable listening on port 9000
app.listen(9000, () => {
  console.log('the server is listening for requests on port 9000');
});
