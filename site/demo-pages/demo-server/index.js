const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from Express");
})
app.put('/users', async (req, res) => {

    try {
        
        const {names} = req.body;
        const {position} = req.body;
        const updateRole = await pool.query('UPDATE demo_users SET title = $1 WHERE full_name = $2', 
        [position, names[0]]);

        // for(let i =0; i<names.length; i++){
        //     const updateRole = await pool.query('UPDATE demo_users SET title = $1 WHERE full_name = $2', 
        //     [position, names[i]]);
        // }

    } catch (err) {
        console.log(err.message);
    }
})

app.listen(port, () => {
    console.log(`bug tracker server has started on port ${port}`);
})