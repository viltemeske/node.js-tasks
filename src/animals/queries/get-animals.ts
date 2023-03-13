/* eslint-disable no-console */
import config from 'config';
import { RequestHandler } from 'express';
import mysql from 'mysql2/promise';
import SQL from 'animals/sql';
import { AnimalModel } from '../types';

const getAnimals: RequestHandler<
  {},
  AnimalModel[],
  undefined,
  {}
> = async (req, res) => {
  const connection = await mysql.createConnection(config.database);

  const sql = `
  ${SQL.SELECT}
  ${SQL.GROUP}
  `;

  const [animals] = await connection.query(sql);

  connection.end();

  res.json(animals as AnimalModel[]);
};

export default getAnimals;
