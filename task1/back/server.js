const express = require('express');
const fs = require("fs");
const cors = require("cors");
const bodyParser = require('body-parser');

let cards;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function addUserToJson(userObj) {
    fs.readFile(__dirname + "/registeredUsers.json", (error, data) => {
        if(error) throw error;
        let users = JSON.parse(data);
        users.users.push(userObj);
        let usersJson = JSON.stringify(users, null, "\t");
        fs.writeFile("./registeredUsers.json", usersJson, function (error, data) {
            if (error) throw error;
        });
    });
}

fs.readFile(__dirname + "/employees.json", (error, data) => {
    if(error) {
        throw error;
    }
    cards = JSON.parse(data.toString());
});

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

// registration
app.post('/register', (request, response) => {
    addUserToJson(request.body);
});

app.listen(5000, () => console.log('Server has been started'));
