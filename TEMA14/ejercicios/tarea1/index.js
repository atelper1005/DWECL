import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

const router = express.Router();
const __dirname = path.resolve();

// Ruta para enviar el archivo index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para manejar la petición AJAX
app.get('/pagAjax', (req, res) => {
    // Simulación de datos en formato JSON
    const data = {
        nombre: 'Antonio Jesús',
        apellido: 'Téllez'
    };
    // Envío de la respuesta como JSON
    res.json(data);
});

// Iniciar el servidor
app.use('/', router);
app.use(express.static(__dirname));
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});