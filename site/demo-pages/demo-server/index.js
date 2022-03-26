const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from Bug Tracker Express");
})

app.listen(port, () => {
    console.log(`bug tracker server has started on port ${port}`);
})