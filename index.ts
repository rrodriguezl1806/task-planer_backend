// import * as express from 'express';
// import mongoose from 'mongoose'
// import cors from 'cors';
// import bodyParser from 'body-parser'
// import http from 'http'
// import morgan from 'morgan'

// const app = express();
// const port = process.env.PORT || '3001';
// app.set('port', port);

// // Get our API routes
// const api = require('./app/routes/');

// mongoose.connect('mongodb://localhost/task-planer_db', (err, res) => {
//     if (err) {
//         return console.log(`Error al conectar con la bd: ${err}`)
//     } else {
//         console.log("Conexión a la bd establecida ...");

//         // Middleweres
//         app.use(cors({origin: '*'}));
//         app.use(bodyParser.urlencoded({ extended: false }));
//         app.use(bodyParser.json());
//         app.use(morgan('short'));

//         // Set our api routes
//         app.use('/api', api);

//         // Create HTTP server.
//         const server = http.createServer(app);

//         // Listen on provided port, on all network interfaces.
//         server.listen(port, () => console.log(`API running on localhost:${port}`));
//     }
// })
