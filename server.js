const express = require('express');
const app = express();


// Define routes here (we'll add them soon)

// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
  })



  app.get('/greetings/:name', (req, res) => {

    const name = req.params.name;

    res.send(`Hello there, ${name}!`);
});


  