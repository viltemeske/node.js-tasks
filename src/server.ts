/* eslint-disable no-console */
import express from 'express';
import morgan from 'morgan';
import config from 'config';
import cors from 'cors';
import animalsControler from 'animals';
import DatabaseService from 'services/database-service';

const server = express();
server.use(cors());
server.use(express.json());
server.use(morgan('tiny'));
server.use(express.static('public'));
server.use('/api/animals', animalsControler);

DatabaseService.connect(() => {
  server.listen(config.server.port, () => {
    console.log(`Server is running on ${config.server.address}`);
  });
});
