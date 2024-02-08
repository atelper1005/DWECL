// Envío de EMAIL

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'atelper1005@g.educaand.es', // Cuenta que se usa para el envío
      pass: 'rrbe eyvn vkeo uoyh'  // Poner password
    }
  });
  
  var mailOptions = {
    from: 'atelper1005@g.educaand.es', // Correo remitente
    to: 'jherram0603@g.educaand.es', // Correo destino
    subject: 'Enviando correo desde Node.js',
    html: '<h1>Hola desde Node.js</h1>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Correo enviado: ' + info.response);
    }
  });