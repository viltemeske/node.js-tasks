import express from 'express';
import morgan from 'morgan';
import config from 'config';
import cors from 'cors';
import animals from 'animals';

const server = express();
server.use(cors());
server.use(express.json());
server.use(morgan('tiny'));
server.use(express.static('public'));
server.use('/api/animals', animals);

server.listen(config.server.port, () => {
  console.log(`Server is running on ${config.server.address}`);
});
