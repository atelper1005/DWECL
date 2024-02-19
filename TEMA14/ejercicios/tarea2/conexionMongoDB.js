import { MongoClient } from "mongodb";
import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

// Conexion URI
const uri = "****";

//Solucitudes JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function run() {
    const client = new MongoClient(uri);
  try {
    await client.connect();
        console.log("Conexión exitosa a la base de datos");

        // Devolver la instancia del cliente y la base de datos
        return {
            client,
            database: client.db('tarea2'),
            collection: client.db('tarea2').collection('personas')
        };
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        throw error;
  }
}

run().catch(console.dir);

// // Script.js

// // we create 'users' collection in newdb database
// var url = "mongodb://localhost:27017/newdb";
 
// // create a client to mongodb
// var MongoClient = require('mongodb').MongoClient;
 
// // make client connect to mongo service
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     // db pointing to newdb
//     console.log("Switched to "+db.databaseName+" database");
//     // create 'users' collection in newdb database
//     db.createCollection("users", function(err, result) {
//         if (err) throw err;
//         console.log("Collection is created!");
//         // close the connection to db when you are done with it
//         db.close();
//     });
// });

// var express = require('express');
// var app = express();
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost/EmployeeDB';
// var str = "";

// app.route('/Employeeid').get(function(req, res) {
//    MongoClient.connect(url, function(err, db) {
//        var collection = db.collection('Employee');
//        var cursor = collection.find({});
//        str = "";
//        cursor.forEach(function(item) {
//            if (item != null) {
//                     str = str + "    Employee id  " + item.Employeeid + "</br>";
//                 }
//        }, function(err) {
//            res.send(err);
//            db.close();
//           }
//        );
//    });
// });
// var server = app.listen(8080, function() {});

//Insertar registros
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost/EmployeeDB';

// MongoClient.connect(url, function(err, db) {

//     db.collection('Employee').insertOne({
//         Employeeid: 4,
//         EmployeeName: "NewEmployee"
//     });
// }); 
