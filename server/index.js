const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

server.use('/api', require('./api'));

server.listen(5000, () => {
  console.log('Server started on port 5000');
});
