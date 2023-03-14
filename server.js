require('./src/config/ConexionDB');
const express = require('express');
const cors = require('cors');
const http = require('http');

/* Import routers */
const clientRte = require('./src/router/client');
const categoryRte = require('./src/router/client');

const app = express();

const PORT_HTTP = 3000;

app.use(express.json());
app.use(cors());

app.use('/client', clientRte);
app.use('/category', categoryRte);

http.createServer(app).listen(PORT_HTTP, () => {
    console.info(`Running app protocol HTTP, in port: ${PORT_HTTP}`);
});
