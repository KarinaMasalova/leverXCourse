const express = require('express');
const fs = require("fs");
const cors = require("cors");

let cards;

fs.readFile(__dirname + "/employees.json", (error, data) => {
    if(error) {
        throw error;
    }
    cards = JSON.parse(data.toString());
});

const app = express();

app.use(cors());

// get all cards
app.get('/', (request, response) => {
    response.send(cards);
});

// get filtered cards by input search
app.get('/filter', (request, response) => {
    let inputValue = request.query.inputValue.trim();
    response.send(cards.cards.filter((card) => {
        return card.engName
            .toLowerCase()
            .includes(inputValue) ||
                card.ruName
            .toLowerCase()
            .includes(inputValue);
    }));
});

// get card by id
app.get('/:id', (request, response) => {
    response.send(cards.cards.filter((card) => card.id == request.params.id)[0]);
});

app.listen(5000, () => console.log('Server has been started'));
