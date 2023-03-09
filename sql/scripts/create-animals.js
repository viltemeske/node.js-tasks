const dbData = require('../old-data/db.json');
const { usersEmailIdMap } = require('./create-users');
const { typeSpeciesMap } = require('./create-species');

const animalInsertionRows = dbData.animals
.map(({
    name,
    type: { type, species },
    age,
    fosterer,
}) => `('${name}', '${age}', ${typeSpeciesMap[type][species]}, ${usersEmailIdMap[fosterer.email]})`)
.join(',\n');

const animalInsertionSql = `
insert into animals(name, animalSpeciesId, age, userId) values
${animalInsertionRows};
`;

console.log(animalInsertionSql);

