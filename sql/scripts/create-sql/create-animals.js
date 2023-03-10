const createAnimals = (animals, usersEmailIdMap, typeSpeciesMap) => {
    const animalInsertionRows = animals
        .map(({
            name,
            age,
            type: { type, species },
            fosterer,
        }) => `('${name}', '${age}', ${typeSpeciesMap[type][species]}, ${usersEmailIdMap[fosterer.email]})`)
        .join(',\n');

    return `
insert into animal(name, age, animalSpeciesId, userId) values
${animalInsertionRows};`;
}

module.exports = createAnimals;