const express = require('express')

const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

const chefs = require('./data/chef.json');
const fastFood = require('./data/fastFood.json');

app.get('/', (req, res)=>{
    res.send('Fresh Eat server running')
});

app.get('/chef', (req, res)=>{
    res.send(chefs)
})

app.get('/chef/:id', (req, res)=>{
    const id = req.params.id;
    const selectedRecipe = chefs.find(chef=> chef.id === id);
    res.send(selectedRecipe);
})

app.get('/fast-food', (req,res)=>{
    res.send(fastFood);
})

app.listen(port, ()=>{
    console.log(`Fresh eat server running on port: ${port}`)
})