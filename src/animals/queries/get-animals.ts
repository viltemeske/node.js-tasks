/* eslint-disable no-console */
import config from 'config';
import { RequestHandler } from 'express';
import { animals } from 'animals/data';
import mysql from 'mysql2/promise';
import { AnimalModel } from '../types';

const getAnimals: RequestHandler<
{},
AnimalModel[],
undefined,
{}
> = async (req, res) => {
  const connection = await mysql.createConnection(config.database);

  const [queryResult] = await connection.query('SELECT * FROM animal_database.animal;');

  console.log(queryResult);

  connection.end();

  res.json(animals);
};

export default getAnimals;
