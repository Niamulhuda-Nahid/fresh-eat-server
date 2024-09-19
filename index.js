const express = require('express')

const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

const chefs = require('./data/chef.json')

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

app.listen(port, ()=>{
    console.log(`Fresh eat server running on port: ${port}`)
})