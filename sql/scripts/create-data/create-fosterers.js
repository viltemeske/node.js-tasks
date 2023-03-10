const createFosterers = (animals) => animals
  .map(x => x.fosterer)
  .filter((x, i, arr) => arr.findIndex(y => x.email === y.email) === i);

module.exports = createFosterers;