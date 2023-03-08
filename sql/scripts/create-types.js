const dbData = require('../old-data/db.json')

const { animals } = dbData;

const typesTitles = [...new Set(animals.map(x => x.type.type))];
const typesMap = typesTitles.reduce((prevMap, typeTitle, i) => ({
    ...prevMap,
    [typeTitle]: i + 1
}), {})

const insertionRows = typesTitles
.map(x => `('${x}')`)
.join(',\n');

const insertionSQL = `
insert into speciestype(title) values
${insertionRows};
`
console.log(insertionSQL);

module.exports = {
    insertionSQL,
    typesMap
};