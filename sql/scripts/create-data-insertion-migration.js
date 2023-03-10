const fs = require('fs');
const oldData = require('../old-data/db.json');
const createTypesTitles = require('./create-data/create-types-titles');
const createTypesMaps = require('./create-data/create-types-maps');
const createFosterers = require('./create-data/create-fosterers');
const createUsersEmailIdMap = require('./create-data/create-user-email-id-map');
const createTypeSpeciesMap = require('./create-data/create-types-species-map');
const createTypes = require('./create-sql/create-types');
const createSpecies = require('./create-sql/create-species');
const createUsersImages = require('./create-sql/create-users-images');
const createUsers = require('./create-sql/create-users');
const createAnimals = require('./create-sql/create-animals');
const createAnimalImages = require('./create-sql/create-animal-images');
const { animals } = oldData;

const typesTitles = createTypesTitles(animals);
const typesMap = createTypesMaps(typesTitles);
const fosterers = createFosterers(animals);
const usersEmailIdMap = createUsersEmailIdMap(fosterers);
const typeSpeciesMap = createTypeSpeciesMap(animals);
const startWithId = fosterers.length + 2;
const typesSql = createTypes(typesTitles)
const speciesSql = createSpecies(animals, typesMap);
const userImagesSql = createUsersImages(fosterers);
const usersSql = createUsers(fosterers);
const animalsSql = createAnimals(animals, usersEmailIdMap, typeSpeciesMap);
const animalsImagesSql = createAnimalImages(animals, startWithId);

const dataInsertionMigration = [
    typesSql,
    speciesSql,
    userImagesSql,
    usersSql,
    animalsSql,
    animalsImagesSql,
].join('\n');

const date = new Date();
const dateStr = date.toLocaleString('lt-LT', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
})
    .replaceAll(':', '-')
    .replaceAll(' ', '-')
fs.writeFile(
    `sql/migrations/migration-${dateStr}-data-insertion.sql`,
    dataInsertionMigration, (err) => err && console.log(err)
);












