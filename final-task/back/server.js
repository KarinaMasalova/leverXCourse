const express = require('express');
const fs = require("fs");
const bodyParser = require('body-parser');
const cors = require("cors");
var dateFormat = require("dateformat");

let requests;
let now = new Date();
dateFormat.masks.creationDate = "dd mmm yyyy";

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

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
    const cardRequest = req.body;
    const startDateStrToDate = new Date(cardRequest.startDate);
    cardRequest.id = requests.reduce((acc, request) => Math.max(acc, request.id), 0) + 1;
    cardRequest.creationDate = dateFormat(now, "creationDate");
    cardRequest.approve = "Approved";
    cardRequest.year = startDateStrToDate.getFullYear();
    addRequestToJson(cardRequest);
    res.send(cardRequest);
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
