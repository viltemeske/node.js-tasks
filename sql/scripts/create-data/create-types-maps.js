const createTypesMap = (typesTitles) => typesTitles.reduce((prevMap, typeTitle, i) => ({
    ...prevMap,
    [typeTitle]: i + 1
}), {})

module.exports = createTypesMap;