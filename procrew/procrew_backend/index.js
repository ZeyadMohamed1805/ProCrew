const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
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
const insertData = (table) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.post(`/add${table}`, (request, response) => {
        let object = {id: `${request.body.id}`, firstname: `${request.body.firstname}`, lastname: `${request.body.lastname}`, email: `${request.body.email}`, password: `${request.body.password}`};
        let sql = `INSERT INTO ${table} SET ?`;
        let query = database.query(sql, object, (error, result) => {
            if (error) {
                throw error;
            }
            console.log(request.body);
            response.send(result);
        })
    })
}

const insertItems = (table) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.post(`/add${table}`, (request, response) => {
        let object = {id: `${request.body.id}`, name: `${request.body.name}`, price: `${request.body.price}`};
        let sql = `INSERT INTO ${table} SET ?`;
        let query = database.query(sql, object, (error, result) => {
            if (error) {
                throw error;
            }
            console.log(request.body);
            response.send(result);
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
            response.send(result);
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
    app.delete(`/delete${table}/:id`, (request, response) => {
        let sql = `DELETE FROM ${table} WHERE id = ${request.params.id}`;
        let query = database.query(sql, (error, result) => {
            if (error) {
                throw error;
            }
            console.log(result);
            response.send(result);
        })
    })
}

selectData("clients");
selectData("owners");
selectData("menus");
selectData("checkout");
selectOneData("clients");
selectOneData("owners");
selectOneData("menus");
selectOneData("checkout");
insertData("clients");
insertData("owners");
insertData("menus");
insertItems("checkout");
deleteData("menus");

app.listen("5000", () => {
    console.log("Server started on port 5000");
});