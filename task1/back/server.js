const express = require('express');
const fs = require("fs");
const cors = require("cors");
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

let cards;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function encrypt(password) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

function addUserToJson(userObj) {
    fs.readFile(__dirname + "/registeredUsers.json", (error, data) => {
        if(error) throw error;
        let users = JSON.parse(data);
        userObj.password = encrypt(userObj.password);
        users.users.push(userObj);
        let usersJson = JSON.stringify(users, null, "\t");
        fs.writeFile("./registeredUsers.json", usersJson, function (error, data) {
            if (error) throw error;
        });
    });
}

function compareWithRegisteredUsers(obj) {
    let data = fs.readFileSync(__dirname + "/registeredUsers.json");
    let users = JSON.parse(data);
    let filteredUsers = users.users.filter((user) => {
        let isPasswordCorrect = bcrypt.compareSync(obj.password, user.password);
        return isPasswordCorrect && user.login === obj.login
    });
    return filteredUsers[0];
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
    response.send(request.body);
});

// authorization
app.post('/authorize', (request, response) => {
    const user = compareWithRegisteredUsers(request.body);
    delete user.password;
    response.send(user);
});

app.listen(5000, () => console.log('Server has been started'));
