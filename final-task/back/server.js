const express = require('express');
const fs = require("fs");
const bodyParser = require('body-parser');

let requests;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

fs.readFile(__dirname + "/requests.json", (error, data) => {
    if(error) {
        throw error;
    }
    requests = JSON.parse(data.toString());
});

function writeRequestToFile(json) {
    fs.writeFile("./requests.json", json, function (error, data) {
        if (error) throw error;
    });
}

function addRequestToJson(requestObj) {
    requests.push(requestObj);
    let requestsJson = JSON.stringify(requests, null, "\t");
    writeRequestToFile(requestsJson);
}

// get all requests
app.get('/', (req, res) => {
    res.send(requests);
});

// get request by id
app.get('/:id', (req, res) => {
    res.send(requests.filter((request) => request.id == req.params.id)[0]);
});

// add request to json
app.post('/add', (req, res) => {
    addRequestToJson(req.body);
    res.send(req.body);
});

// delete request from json
app.delete('/:id', function (req, res) {
    res.end();
});

// update request in json
app.put('/:id', function (req, res) {
    res.send('Got a PUT request at /user');
});

app.listen(5000, () => console.log('Server has been started'));
