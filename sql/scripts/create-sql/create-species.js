const createSpecies = (animals, typesMap) => {
    const insertionRows = animals
        .map(x => ({
            typeId: typesMap[x.type.type],
            title: x.type.species
        }))
        .map(({ typeId, title }) => `(${typeId}, '${title}')`)
        .join(',\n');

    return `
insert into animalspecies(speciesTypeId, title) values
${insertionRows};`;
}

module.exports = createSpecies;