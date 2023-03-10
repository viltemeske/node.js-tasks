const createUsersEmailIdMap = (fosterers) => fosterers.reduce((prevMap, fosterer, i) => ({
  ...prevMap,
  [fosterer.email]: i + 2
}), {});

module.exports = createUsersEmailIdMap;