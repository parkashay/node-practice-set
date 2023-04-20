// run this using node server.js command or npm start.
const express = require('express');
const users = require('./users')
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send(users)
})


app.listen(port, () => {
    console.log("listening on http://localhost:"+ port);
})

module.exports = users;
