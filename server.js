const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
//Configuring express server
app.use(bodyparser.json());
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "udemymysql",
    database: 'students',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
});

// handling /api/student post request, create new student
app.post('/api/student', (req, res) => {
    let student = req.body;
    var sql = "insert into students (id, name) values (?, ?);";
    mysqlConnection.query(sql, [student.id, student.name], (err, rows, fields) => {
        if (!err) {
            res.send("new student added");
            console.log(rows);
        }
    else
            console.log(err);
        res.send('student not added due to some error!')
})
});

// handling /api/student get request, show all students
app.get('/api/student', (req, res) => {
    mysqlConnection.query('SELECT * FROM students', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
            console.log(rows);
        }
        else
            console.log(err);
    })
});

// handling /api/student/:id get request, find student by id
// completed=> http://localhost:4000/api/student/1
app.get('/api/student/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM students WHERE id = ?;', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
            console.log(rows);
        }
        else
            console.log(err);
    })
});

// handling /api/student/:id put request, update student by id 
app.put('/api/student/', (req, res) => {
    let student = req.body;
    var sql = "update students set name = ? where id = ?"
    mysqlConnection.query(sql, [student.name, student.id], (err, rows, fields) => {
    if (!err)
        res.send('student Details Updated Successfully');
    else
        console.log(err);
})
});

// handling /api/student/:id delete request, delete student by id
app.delete('/api/student/:id', (req, res) => {
    mysqlConnection.query('delete from students where id = ?;', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Learner Record deleted successfully.');
        else
            console.log(err);
    })
});

// handling /api/student/ delete request, delete all students
app.delete('/api/student/', (req, res) => {
    mysqlConnection.query('delete from students;', (err, rows, fields) => {
        if (!err)
            res.send('All deleted successfully.');
        else
            console.log(err);
    })
});

// handling /api/student/:name get request, find student by name
app.get('/api/student/name/:keyword', (req, res) => {
    mysqlConnection.query("SELECT * FROM students WHERE name LIKE %?%;", [req.params.keyword], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
            console.log(rows);
        }
        else
            console.log(err);
    })
});


//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}..`));