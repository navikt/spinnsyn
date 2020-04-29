'use strict';
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const PORT = process.env.PORT || 3004;

const startServer = () => {
  try {
    const server = express();

    // TODO: setup cors

    server.use(
      morgan('common', {
        skip: (req, _res) =>
          req.originalUrl === '/is_alive' ||
          req.originalUrl === '/is_ready' ||
          req.originalUrl.includes('/static/') ||
          req.originalUrl.includes('/manifest') ||
          req.originalUrl.includes('/logo'),
      }),
    );

    server.use('/', express.static(path.join(__dirname, '../../client/build')));
    server.get('/is_alive', (_req, res) => res.send('Alive'));
    server.get('/is_ready', (_req, res) => res.send('Ready'));

    server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
