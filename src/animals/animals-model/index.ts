import AnimalNotFoundError from 'animals/animal-not-found-error';
import { AnimalData, AnimalViewModel } from 'animals/types';
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

  connection.end();
};

const createAnimal = async (animalData: AnimalData): Promise<AnimalViewModel> => {
  const connection = await mysql.createConnection(config.database);

  const preparedSql = `
  insert into animal (name, age, animalSpeciesId, userId) values
  (?, ?, ?, 2);

  set @created_animal_id = last_insert_id();

  insert into image(src) values
  ${animalData.images.map(() => '(?)').join(',\n')};

  set @first_image_id = last_insert_id();

  insert into animalimage(imageId, animalId)
  select imageId, @created_animal_id as animalId
  from image
  where imageId >= @first_image_id;

  ${SQL.SELECT}
  where a.animalId = @created_animal_id
  ${SQL.GROUP}
  `;

  const bindings = [
    animalData.name,
    animalData.age,
    animalData.animalSpeciesId,
    // animalData.fostererId,
    ...animalData.images,
  ];

  const [queryResult] = await connection.query<mysql.RowDataPacket[][]>(preparedSql, bindings);
  const [animal] = queryResult[queryResult.length - 1] as AnimalViewModel[];

 connection.end();

 return animal;
};

const replaceAnimal = async (animalId: string, animalData: AnimalData):
Promise<AnimalViewModel> => {
const connection = await mysql.createConnection(config.database);

const preparedSql = `
update animal
set name = ?, age = ?, animalSpeciesId = ?
where animalId = ?;

set @animalimagesIds = (
  select group_concat(imageId)
  from animalimage
  where animalId = ?
  group by animalId);

delete from animalimage
where animalId = ?;

delete from image
where find_in_set(imageId, @animalimagesIds);

insert into image (src) values
${animalData.images.map(() => '(?)').join(',\n')};

set @first_image_id = last_insert_id();

insert into animalimage(imageId, animalId)
select imageId, ? as animalId
from image
where imageId >= @first_image_id; 

${SQL.SELECT}
where a.animalId = ?
${SQL.GROUP};
`;

const bindings = [
  animalData.name,
  animalData.age,
  animalData.animalSpeciesId,
  animalId,
  animalId,
  animalId,
  ...animalData.images,
  animalId,
  animalId,
];

const [queryResult] = await connection.query<mysql.RowDataPacket[][]>(preparedSql, bindings);
const [animal] = queryResult[queryResult.length - 1] as AnimalViewModel[];

connection.end();

return animal;
};

const AnimalModel = {
  getAnimals,
  getAnimal,
  deleteAnimal,
  createAnimal,
  replaceAnimal,
};

export default AnimalModel;
