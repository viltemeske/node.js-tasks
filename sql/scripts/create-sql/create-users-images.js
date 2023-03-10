const createUsersImages = (fosterers,) => {
  const imagesInsertionRows = fosterers
    .map(x => `('${x.image}')`)
    .join(',\n');

  return `
insert into image(src) values
('https://thumbs.dreamstime.com/b/admin-sign-laptop-icon-stock-vector-166205404.jpg'),
${imagesInsertionRows};`;

}

module.exports = createUsersImages;