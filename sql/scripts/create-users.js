const dbData = require('../old-data/db.json');

const { animals } = dbData;

const fosterers = animals
  .map(x => x.fosterer)
  .filter((x, i, arr) => arr.findIndex(y => x.email === y.email) === i);

const imagesInsertionRows = fosterers
  .map(x => `('${x.image}')`)
  .join(',\n');

const imagesInsertionSql = `
insert into image(src) values
('https://thumbs.dreamstime.com/b/admin-sign-laptop-icon-stock-vector-166205404.jpg'),
${imagesInsertionRows};
`;

const hostsInsertionRows = fosterers
  .map(({
    name,
    surname,
    email,
    mobile,
  }, i) => `('${email}', 'laikinas', '${name}', '${surname}', '${mobile}', ${i + 2}, 'USER')`)
  .join(',\n');


const usersInsertionSql = `
insert into user(email, password, name, surname, mobile, imageId, role) values
('admin@admin.com', '123456789', 'Adminas', 'Smegenius', '+370 6999099', 1, 'ADMIN'),
${hostsInsertionRows};
`;

console.log(imagesInsertionSql);
console.log(usersInsertionSql);

module.exports = {
  users: fosterers.map((x, i) => ({ ...x, id: i + 2 }))
}
