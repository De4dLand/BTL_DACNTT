const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'StorageManagement',
});
app.get('/', (re, res) => {
    return res.json("from Backend site");
});
app.get('/category', (req, res) => {
    const sql = "Select * From tbCategory";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})
app.listen(8081, () => {
    console.log("Listening!");
});