projectData = {};

// express to run server and routes
const express = require('express');
const app = express();

// install body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors for cross origin allownace
const cors = require('cors');
app.use(cors());

// intializing the main project folder
app.use(express.static('website'));
const port = 8000;

// spin up the server
const server = app.listen(port, listening);
function listening() {
    console.log(`running on local host: ${port}`);
};

// use the get method to return the object projectData 
app.get('/all', sendData);
function sendData(req, res) {
    res.send(projectData);
}

app.post('/putData', totalData);

function totalData (request, response){
    projectData['tempreture'] = request.body.temp
    projectData['date'] = request.body.date
    projectData['feel'] = request.body.content
}