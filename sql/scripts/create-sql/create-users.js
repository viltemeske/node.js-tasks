const createUsers = (fosterers) => {
  const fosterersInsertionRows = fosterers
    .map(({
      name,
      surname,
      email,
      mobile,
    }, i) => `('${email}', 'laikinas', '${name}', '${surname}', '${mobile}', ${i + 2}, 'USER')`)
    .join(',\n');

  return `
insert into user(email, password, name, surname, mobile, imageId, role) values
('admin@admin.com', '123456789', 'Adminas', 'Smegenius', '+370 6999099', 1, 'ADMIN'),
${fosterersInsertionRows};`;
}

module.exports = createUsers;