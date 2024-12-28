const express = require('express');
const app = express();


// Define routes here (we'll add them soon)

// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
  })


// 1. Be Polite, Greet the User
  app.get('/greetings/:name', (req, res) => {

    const name = req.params.name;

    res.send(`Hello there, ${name}!`);
});


// 2. Rolling the Dice
app.get('/roll/:number', (req, res) => {

  const number = req.params.number;
  if(Number(req.params.number) !== NaN){
  console.log(Number(req.params.number))
    res.send(`You rolled a ${number}`)
  }
  else{
        res.send('You must specify a number');  

  }
});

// 3. I Want THAT One!


app.get('/collectibles/:indexParameter', (req, res) => {

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
  const indexParameter = req.params.indexParameter;
  if(collectibles[indexParameter] === undefined){
  res.send('This item is not yet in stock. Check back soon');
  }
  else{
    res.send(`So, you want the ${collectibles[indexParameter].name}? For ${collectibles[indexParameter].price}, it can be yours`)
  }
});

  
// 4. Filter Shoes by Query Parameters

app.get('/shoes/:queryParameter/:enteredQuery', (req, res) => {

  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

  const queryParameter = req.params.queryParameter;
  const enteredQuery = req.params.enteredQuery
  console.log(shoes[2].price)
  console.log(Number(enteredQuery))
  for(i=0; i<shoes.length; i++){
  if(queryParameter === "min-price" && Number(enteredQuery) < shoes[i].price){
    console.log(shoes)
    res.send(shoes[i]);
  }
  else if(queryParameter === "max-price" && Number(enteredQuery) > shoes[i].price){
    res.send(shoes[i])
  }
  else if(queryParameter === "type" && enteredQuery == shoes[i].type){
    res.send(shoes[i])
  }
  else{
    res.send(shoes)
  }
}
});
