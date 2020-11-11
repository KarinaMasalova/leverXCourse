const express = require('express');
const fs = require("fs");
let cards;

fs.readFile(__dirname + "/employees.json", (error, data) => {
    if(error) {
        throw error;
    }
    cards = JSON.parse(data.toString());
});

const app = express();

// get all cards
app.get('/', (request, response) => {
    response.send(cards);
});

// get card by id
app.get('/:id', (request, response) => {
    response.send(cards.cards.filter((card) => card.id == request.params.id)[0]);
});

app.listen(5000, () => console.log('Server has been started'));
