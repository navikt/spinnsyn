'use strict';
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3004;

const startServer = () => {
  try {
    const server = express();

    // TODO: setup cors
    // TODO: setup logging

    server.get('/is_alive', (_req, res) => res.send('Alive'));
    server.get('/is_ready', (_req, res) => res.send('Ready'));
    server.use('/', express.static(path.join(__dirname, '../../../client/build')));

    server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
