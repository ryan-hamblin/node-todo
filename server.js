const express = require('express');
const app = express();
const port = process.env.PORT || 3030;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Todo = require('./api/models/todoListModels')
const cors = require('cors');

const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
};

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useMongoClient: true });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const routes = require('./api/routes/todoListRoutes')
routes(app);

app.listen(port);

console.log(`App Listening suckkas on ${port}`);
