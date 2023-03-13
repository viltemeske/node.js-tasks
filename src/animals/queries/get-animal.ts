import { RequestHandler } from 'express';
import { AnimalModel } from 'animals/types';
import ServerSetupError from 'errors/server-setup-error';
import AnimalNotFoundError from 'animals/animal-not-found-error';
import handleRequestError from 'helpers/handle-request-error';
import mysql from 'mysql2/promise';
import config from 'config';
import SQL from 'animals/sql';

const getAnimal: RequestHandler<
  { id?: string },
  AnimalModel | ErrorResponse,
  undefined,
  {}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const connection = await mysql.createConnection(config.database);

    const sql = `
    ${SQL.SELECT}
    where a.animalId = ${id}
    ${SQL.GROUP}`;

    const [animals] = await connection.query<mysql.RowDataPacket[]>(sql);
    if (animals.length === 0) throw new AnimalNotFoundError(id);

    connection.end();

    res.json(animals[0] as AnimalModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default getAnimal;
