insert into speciestype(title) values
('Plėšrūnas'),
('Žoliaėdis'),
('Paukštis'),
('Egzotinis gyvūnas');

insert into animalspecies(speciesTypeId, title) values
(1, 'Šuo'),
(1, 'katinas'),
(2, 'Asilas'),
(2, 'Arklys'),
(1, 'katinas'),
(2, 'Arklys'),
(2, 'Arklys'),
(1, 'Šuo'),
(1, 'Šuo'),
(1, 'Šuo'),
(2, 'Avis'),
(1, 'Šuo'),
(3, 'Višta'),
(4, 'Vėžlys');

insert into image(src) values
('https://thumbs.dreamstime.com/b/admin-sign-laptop-icon-stock-vector-166205404.jpg'),
('https://media.licdn.com/dms/image/D5603AQGX6TCWoOBpWQ/profile-displayphoto-shrink_800_800/0/1675086295425?e=2147483647&v=beta&t=tB1So1CZ5tnmlts8pDGFM7Z37Kv0t1SG1Ax3MJA7yo8'),
('https://i.pinimg.com/736x/b7/36/e2/b736e222d4112f20c00c2b66aa232376.jpg');

insert into user(email, password, name, surname, mobile, imageId, role) values
('admin@admin.com', '123456789', 'Adminas', 'Smegenius', '+370 6999099', 1, 'ADMIN'),
('meshkenai@gmail.com', 'laikinas', 'Viltė', 'Meškė', '+370 699 90759', 2, 'USER'),
('stebuklingidraugai@gmail.com', 'laikinas', 'Ugnė', 'Nedzin', '+370 699 12345', 3, 'USER');