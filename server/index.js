const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config()
const port = process.env.PORT || process.env.SERVER_PORT

const app = express();
// const cors = require('cors');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.use(cors());
app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'public/main.js')));

app.listen(port, () => {
    console.log('Listening on port ' + port)
});