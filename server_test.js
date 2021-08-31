var express = require('express');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var cors = require('cors');
var fizzbuzzRoutes = require('./routes/fizzbuzz.js');
var createError = require('http-errors');
var path = require('path');

const app = express();
app.use(cors());

dotenv.config({path:'config.env'});
// console.log(PORT);

const PORT = process.env.PORT || 8008;

app.use('/', fizzbuzzRoutes);

app.listen(PORT, () => {
    console.log(`FizzBuzz API Server is running on port http://localhost:${PORT}`)
});