const createAnimals = (animals, usersEmailIdMap, typeSpeciesMap) => {
    const animalInsertionRows = animals
        .map(({
            name,
            type: { type, species },
            age,
            fosterer,
        }) => `('${name}', '${age}', ${typeSpeciesMap[type][species]}, ${usersEmailIdMap[fosterer.email]})`)
        .join(',\n');

    return `
insert into animals(name, animalSpeciesId, age, userId) values
${animalInsertionRows};`;
}

module.exports = createAnimals;