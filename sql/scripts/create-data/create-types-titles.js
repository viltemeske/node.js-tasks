const createTypeTitle = (animals) => [...new Set(animals.map(x => x.type.type))];

module.exports = createTypeTitle;