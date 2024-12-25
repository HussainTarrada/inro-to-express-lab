const express = require('express');
const app = express();


// Define routes here (we'll add them soon)

// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
  })



app.get('/greetings/<username-parameter>', (req, res) => {
    res.send(`<h1>Hello ${req.params.username}!</h1>`);
  });
  
  app.get('/roll/', (req, res) => {
    res.send(`<h1>Hello Hussain!</h1>`);
});
  