const dbData = require('../old-data/db.json');
const { typesMap } = require('./create-types.js');

const { animals } = dbData;
const insertionRows = animals
.map(x => [typesMap[x.type.type], x.type.species])
.map(([id, title]) => `(${id}, '${title}')`)
.join(',\n');

const insertionSQL = `
insert into animalspecies(speciesTypeId, title) values
${insertionRows};
`
console.log(insertionSQL);

