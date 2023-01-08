const express = require("express");
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

app.listen("5000", () => {
    console.log("Server started on port 5000");
});