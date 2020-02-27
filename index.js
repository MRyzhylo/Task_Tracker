const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const mysqlConnection  = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "taskTracker"
  });
  
mysqlConnection.connect( err => {
    if (err) {
        console.log(err);
    }  
     console.log("Connected!");
});

app.get('/api/createdb', (req, res) => {

    let sql = 'CREATE DATABASE [IF NOT EXISTS] taskTracker';

    mysqlConnection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }  
         console.log( result );
      });

      res.send("Database created...")
});

app.get('/api/createemployeetable/:name', (req, res) => {

    let sql = `CREATE TABLE [IF NOT EXISTS] ${req.params.name}(
        id int AUTO_INCREMENT,
        user_id int, 
        first_name VARCHAR(255), 
        last_name VARCHAR(255), 
        PRIMARY KEY(id))`;

        mysqlConnection.query(sql, (err, result) => {
            if (err) {
                console.log(err);
            }  
             console.log( result );
          });
          res.send("Employee table created...")
});

app.get('/api/createtasktable/:name', (req, res) => {

    let sql = `CREATE TABLE [IF NOT EXISTS] ${req.params.name}(
        id int AUTO_INCREMENT,
        user_id int, 
        title VARCHAR(255), 
        description VARCHAR(255),
        status VARCHAR(255),
        PRIMARY KEY(id, user_id))`;

        mysqlConnection.query(sql, (err, result) => {
            if (err) {
                console.log(err);
            }  
             console.log( result );
          });

          res.send("Task table created...")
});

app.post('/api/addemployeecard/:tablename', (req, res) => {
    let add = req.body;
    let post = {
        user_id: add.user_id,
        first_name: add.first_name, 
        last_name: add.last_name
    };

    let sql = `INSERT INTO ${req.params.tablename} SET ?`;

    mysqlConnection.query(sql, post, (err, result) => {
        if(err) {
            console.log(err);
        }
        res.send(`Card in ${req.params.tablename} created...`);
    });
});

app.post('/api/addtaskcard/:tablename', (req, res) => {
    let add = req.body;
    let post = {
        user_id: add.user_id,
        title: add.title, 
        description: add.description,
        status: add.status
    };

    let sql = `INSERT INTO ${req.params.tablename} SET ?`;

    mysqlConnection.query(sql, post, (err, result) => {
        if(err) {
            console.log(err);
        }
        res.send(`Card in ${req.params.tablename} created...`);
    });
});

app.put('/api/redactemployeecard/:tablename/:id', (req, res) => {
    let updateEmployeeCard = req.body;
    let sql = `UPDATE ${req.params.tablename} 
    SET user_id = ${updateEmployeeCard.user_id}, 
    first_name = '${updateEmployeeCard.first_name}', 
    last_name = '${updateEmployeeCard.last_name}' 
    WHERE id = ${req.params.id}`;

    mysqlConnection.query(sql, (err, result) => {
        if(err) {
            console.log(err);
        }
        res.send(`Card in ${req.params.tablename} table updated...`);
    });    
});

app.put('/api/redacttaskscard/:tablename/:id', (req, res) => {
    let updateTasksCard = req.body;
    let sql = `UPDATE ${req.params.tablename} 
    SET user_id = ${updateTasksCard.user_id}, 
    title = '${updateTasksCard.title}', 
    description = '${updateTasksCard.description}', 
    status = '${updateTasksCard.status}' 
    WHERE id = ${req.params.id}`;

    mysqlConnection.query(sql, (err, result) => {
        if(err) {
            console.log(err);
        }
        res.send(`Card in ${req.params.tablename} table updated...`);
    });    
});

app.put('/api/updateuserintask/:tablename/:id', (req, res) => {
    let updatedUserId = req.body.user_id;
    let sql = `UPDATE ${req.params.tablename} SET user_id = ${updatedUserId} WHERE id = ${req.params.id}`;
    
    mysqlConnection.query(sql, (err, result) => {
        if(err) {
            console.log(err);
        }
        res.send(`User in ${req.params.tablename} updated...`);
    });
});

app.put('/api/updatestatusintask/:tablename/:id', (req, res) => {
    let updatedStatus = req.body.status;
    let sql = `UPDATE ${req.params.tablename} SET status = '${updatedStatus}' WHERE id = ${req.params.id}`;
    
    mysqlConnection.query(sql, (err, result) => {
        if(err) {
            console.log(err);
        }
        res.send(`Status in ${req.params.tablename} updated...`);
    });
});

app.delete('/api/deletecard/:tablename/:id', (req, res) => {

    let sql = `DELETE FROM ${req.params.tablename} WHERE id = ${req.params.id}`;

    mysqlConnection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }  
         console.log( result );
      });

      res.send(`Card from ${req.params.tablename} deleted...`)
})

app.get('/api/getcard/:tablename/:id', (req, res) => {

    let sql = `SELECT * FROM ${req.params.tablename} WHERE id = ${req.params.user_id}`;

    mysqlConnection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }  
         console.log( result );
      });

      res.send(`Card from ${req.params.tablename} with ${req.params.user_id} received ...`)
});

app.get('/api/getcards/:tablename', (req, res) => {

    let sql = `SELECT * FROM ${req.params.tablename}`;

    mysqlConnection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }  
         console.log( result );
      });

      res.send(`Card from ${req.params.tablename} received ...`)
});



const port = process.env.PORT || 3000;
app.listen(port, ()=> { console.log(`Server srarted on port ${port}`) });