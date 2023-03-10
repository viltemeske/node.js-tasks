import AnimalNotFoundError from 'animals/animal-not-found-error';
import { AnimalViewModel } from 'animals/types';
import config from 'config';
import mysql from 'mysql2/promise';
import SQL from './sql';

const getAnimals = async (): Promise<AnimalViewModel[]> => {
  const connection = await mysql.createConnection(config.database);

  const sql = `
  ${SQL.SELECT}
  ${SQL.GROUP}
  `;

  const [animals] = await connection.query(sql);

  connection.end();

  return animals as AnimalViewModel[];
};

const getAnimal = async (id: string): Promise<AnimalViewModel> => {
  const connection = await mysql.createConnection(config.database);

  const preparedSql = `
  ${SQL.SELECT}
  where a.animalId = ?
  ${SQL.GROUP}`;
  const bindings = [id];

  const [animals] = await connection.query<mysql.RowDataPacket[]>(preparedSql, bindings);
  connection.end();

  if (animals.length === 0) throw new AnimalNotFoundError(id);

  return animals[0] as AnimalViewModel;
};

const deleteAnimal = async (id: string): Promise<void> => {
  const connection = await mysql.createConnection(config.database);
  const preparedSql = `
  SET @animalimagesIds = (
    select group_concat(imageId) 
    from animalimage 
    where animalId = ?
    group by animalId);  

  DELETE from animalimage
  WHERE animalId = ?;

  DELETE from image
  WHERE find_in_set(imageId, @animalimagesIds);

  DELETE from animal
  WHERE animalId = ?;`;

  const bindings = [id, id, id];
  await connection.query(preparedSql, bindings);
};

const AnimalModel = {
  getAnimals,
  getAnimal,
  deleteAnimal,
};

export default AnimalModel;
