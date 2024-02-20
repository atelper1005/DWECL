import { MongoClient } from "mongodb";
import express from "express";
import path from "path";

const app = express();

const uri = "mongodb+srv://atelper1005:atelper1005@tarea2.ihhkf1d.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

app.use(express.json());

const router = express.Router();
var __dirname = path.resolve();

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

// Obtiene por POST un JSON con los datos de los input y los introduce en la base de datos
app.post("/addDatos", async (req, res) => {
    try {
        const { nombre, apellidos } = req.body;
        const db = client.db();
        const collection = db.collection("personas");
        await collection.insertOne({ nombre, apellidos });
        res.send("Documento añadido correctamente");
    } catch (err) {
        console.error("Error: ", err);
        res.send("Error al añadir documento");
    }
});

// Obtiene por GET como un JSON todos los datos que tiene actualmente la base de datos
app.get("/showPersonas", async (req, res) => {
    try {
        const db = client.db();
        const collection = db.collection("datos");
        const documents = await collection.find({}).toArray();
        res.json(documents);
    } catch (err) {
        console.error("Error: ", err);
        res.send("Error al obtener documentos");
    }
});

app.use("/", router);
app.use(express.static(__dirname));

app.listen(3000, () => {
    console.log("Escuchando en puerto 3000");
});