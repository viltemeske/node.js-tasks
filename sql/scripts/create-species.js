const dbData = require('../old-data/db.json');
const { typesMap } = require('./create-types.js');

const { animals } = dbData;

const insertionRows = animals
    .map(x => ({
        typeId: typesMap[x.type.type],
        title: x.type.species
    }))
    .map(({ typeId, title }) => `(${typeId}, '${title}')`)
    .join(',\n');

const insertionSQL = `
insert into animalspecies(speciesTypeId, title) values
${insertionRows};
+`;

const typeSpeciesMap = animals
    .map(x => x.type)
    .reduce((prevMap, { type, species }, i) => {
        const nextMap = {
            ...prevMap,
        }

        if (nextMap[type] === undefined) {
            nextMap[type] = {};
        }

        nextMap[type][species] = i + 1;


        return nextMap
    }, {})

console.log(insertionSQL);

module.exports = {
    typeSpeciesMap,
}