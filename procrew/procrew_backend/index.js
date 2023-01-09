const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

// Create connection
const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "procrew"
});

// Connect
database.connect((error) => {
    if (error) {
        throw error;
    }

    console.log("Mysql connected!");
});

const app = express();

// Insert
const insertClient = (id, firstname, lastname, email, password) => {
    app.get(`/addclient`, (request, response) => {
        let client = {id: id, firstname: firstname, lastname: lastname, email: email, password: password};
        let sql = `INSERT INTO clients SET ?`;
        let query = database.query(sql, client, (error, result) => {
            if (error) {
                throw error;
            }
            console.log(result);
            response.send("Client added...");
        })
    })
}

// Select All
const selectData = (table) => {
    app.use(cors());
    app.get(`/get${table}`, (request, response) => {
        let sql = `SELECT * FROM ${table}`;
        let query = database.query(sql, (error, result) => {
            if (error) {
                throw error;
            }
            console.log(result);
            response.send(result);
        })
    })
}

// Select One

const selectOneData = (table) => {
    app.get(`/get${table}/:id`, (request, response) => {
        let sql = `SELECT * FROM ${table} WHERE id = ${request.params.id}`;
        let query = database.query(sql, (error, result) => {
            if (error) {
                throw error;
            }
            console.log(result);
            response.send(`${table} item fetched...`);
        })
    })
}

// Update
const updateOneData = (table, property, value) => {
    app.get(`/update${table}/:id`, (request, response) => {
        let sql = `UPDATE ${table} SET ${property} = "${value}" WHERE id = ${request.params.id}`;
        let query = database.query(sql, (error, result) => {
            if (error) {
                throw error;
            }
            console.log(result);
            response.send(`${table} item updated...`);
        })
    })
}

// Delete
const deleteData = (table) => {
    app.get(`/delete${table}/:id`, (request, response) => {
        let sql = `DELETE FROM ${table} WHERE id = ${request.params.id}`;
        let query = database.query(sql, (error, result) => {
            if (error) {
                throw error;
            }
            console.log(result);
            response.send(`${table} item deleted...`);
        })
    })
}

selectData("clients");
selectData("owners");
selectData("menus");

app.listen("5000", () => {
    console.log("Server started on port 5000");
});