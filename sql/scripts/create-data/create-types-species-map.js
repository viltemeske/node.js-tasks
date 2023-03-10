const createTypeSpeciesMap = (animals) => animals
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

module.exports = createTypeSpeciesMap;