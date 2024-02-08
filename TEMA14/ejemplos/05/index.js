import { createServer } from 'http';
import * as fs from 'fs';
createServer(function (req, res) {
  // Lee HTML
  // fs.readFile('demo1.html', function(err, data) {
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   res.write(data);
  //   res.end();
  // });

  // Crea fichero
  fs.writeFile('prueba1.txt', 'Contenido….', function (err) {
    if (err) throw err;
    console.log('Creado!');
  });
}).listen(8080);