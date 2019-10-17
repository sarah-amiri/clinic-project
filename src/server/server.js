// JavaScript source code
const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const doctorsRouter = require('./routes/doctors');
const clinicsRouter = require('./routes/clinics');
const usersRouter = require('./routes/users');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/doctors', doctorsRouter);
app.use('/clinics', clinicsRouter);
app.use('/user', usersRouter);
app.use('/', function (req, res) {
    res.send('Hello World!');
});



const port = 3000;
app.listen(port, () => console.log('Server is listening to port ' + port));
