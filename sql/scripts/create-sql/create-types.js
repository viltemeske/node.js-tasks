const createTypes = (typesTitles) => {
    const insertionRows = typesTitles
        .map(x => `('${x}')`)
        .join(',\n');

    return `
insert into speciestype(title) values
${insertionRows};`;
}

module.exports = createTypes;