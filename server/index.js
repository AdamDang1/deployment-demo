const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config()
const port = process.env.PORT || process.env.SERVER_PORT

const app = express();
app.use(cors());
app.use(express.json());
// const cors = require('cors');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.css'));
});



// app.use('/js', express.static(path.join(__dirname, 'public/main.js')));

app.listen(port, () => {
    console.log('Listening on port ' + port)
});