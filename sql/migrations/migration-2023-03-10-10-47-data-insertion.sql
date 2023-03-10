
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

insert into animals(name, animalSpeciesId, age, userId) values
('Rio', '3', 12, 2),
('Svarelis', '1', 5, 2),
('Goša', '27', 3, 3),
('Žaibas', '23', 7, 3),
('Pijus', '1', 5, 2),
('Grantas', '6', 7, 3),
('Aitvaras', '27', 7, 3),
('Labas', '1', 12, 2),
('Vugis', '11', 12, 2),
('Bondas', '0.3', 12, 2),
('Burė', '2', 11, 3),
('Meška', '8', 12, 2),
('Gulbė', '4', 13, 3),
('Pikis', '30', 14, 2);

insert into image(src) values
('https://midwestbernedoodles.com/wp-content/uploads/bb-plugin/cache/daisy-square-square.jpeg'),
('https://media.gettyimages.com/id/506085322/photo/the-lagotto-romagnolo-breed-debuts-at-140th-annual-westminster-kennel-club-dog-show-meet-the.jpg?s=612x612&w=gi&k=20&c=TFLVyAghxOk65JWjbbdnqtaYkCQGlmQHSyag1NdFTKo='),
('https://www.hundeo.com/wp-content/uploads/2019/10/Cavapoo-Hunderasse-Profil.jpg'),
('https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'),
('https://c8.alamy.com/zooms/9/7084f25861f44d8980f7abb212438aaf/pfnyt4.jpg'),
('https://cdn.pixabay.com/photo/2018/03/26/02/05/cat-3261420__340.jpg'),
('https://media.istockphoto.com/id/478835580/photo/close-up-face-of-a-donkey.jpg?s=170667a&w=0&k=20&c=_T_hwRjkPgzdNwYX1_hDAQV7tfBS873q4O1nWq6g0MU='),
('https://www.shutterstock.com/image-photo/isolated-old-donkey-pasture-summer-260nw-1722815659.jpg'),
('https://thumbs.dreamstime.com/b/donkey-his-foal-against-white-background-11785803.jpg'),
('https://media.gettyimages.com/id/1190629233/photo/tiny-little-pony.jpg?s=612x612&w=gi&k=20&c=ent2DYRclA2oqPvY_Mvhah6j4pcf8Iznhd-SvlnxJBA='),
('https://www.shutterstock.com/image-photo/white-pony-on-background-green-260nw-684193330.jpg'),
('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjYCuqYTEZwd2QB-qAeLQrRFsPmKfusDdHw&usqp=CAU'),
('https://imgc.artprintimages.com/img/print/lebens-art-black-cat-square_u-l-f8y6770.jpg?background=f3f3f3'),
('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU'),
('https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=1200,fit=cover/article/main-picture/60c2119386721545403311.jpg'),
('https://i.etsystatic.com/5151863/r/il/a73f8e/429759083/il_570xN.429759083_9ccl.jpg'),
('https://t1.thpservices.com/previewimage/gallil/c2f5236a0b9af0e22f0292047387b6a3/ibr-3239702.jpg'),
('https://thumbs.dreamstime.com/z/small-dark-brown-pony-12079613.jpg'),
('https://media.istockphoto.com/id/473060392/photo/funny-brown-horse-close-up-head.jpg?s=612x612&w=is&k=20&c=o0FqeXkysJ7-vr4pmrZ6RFFFg-GJQlZWOdDMuZbGtO0='),
('https://previews.123rf.com/images/zuzule/zuzule1804/zuzule180400098/100732764-beautiful-brown-horse-running-in-freedom-on-the-grass.jpg'),
('https://media.istockphoto.com/id/540407826/photo/horse-white-background.jpg?s=612x612&w=0&k=20&c=luNHqZKPbE1Gggwnhl4aIfVsjgZhXzwyzIC6mWuz4LI='),
('https://www.k9magazine.com/wp-content/uploads/danny-black-square.jpg'),
('https://www.dylancollard.com/wp-content/uploads/2019/05/BlackDog_Bagheera02.jpg'),
('https://images.pexels.com/photos/1133082/pexels-photo-1133082.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTenkurt9E-qX_DBkmXOMUpxpAlFM612oEkdw&usqp=CAU'),
('https://www.purina.co.uk/sites/default/files/2022-07/German-Spitz-Klein.jpg?itok=bcaG6Zsn'),
('https://dogsbestlife.com/wp-content/uploads/2019/05/German-Spitz-min.jpeg'),
('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlbfzbQIWf2SeS8VffAMx0lE4ju_OUxRwbCA&usqp=CAU'),
('https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F10%2F15%2Fchocolate-lab-puppy-503937116-2000.jpg'),
('https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2022/01/shutterstock_1904432140-1.jpg'),
('https://t3.ftcdn.net/jpg/00/49/14/88/360_F_49148820_VFeCBphN33sufLHcrjkzHWEKuohmc2Ex.jpg'),
('https://cdn.pixabay.com/photo/2016/11/13/21/46/sheep-1822137__340.jpg'),
('https://www.aviuaugintojai.lt/wp-content/uploads/2022/01/192575995_269804714921020_2315174695007757977_n.jpg'),
('https://c8.alamy.com/comp/M276WK/swedish-vallhund-in-sweden-standing-in-grass-M276WK.jpg'),
('https://media.istockphoto.com/id/122945913/photo/swedish-vallhund-dog.jpg?s=612x612&w=0&k=20&c=vRreRA1_VC6MJAWEieuB-gouAUD3sFNJOovIU1dLXJM='),
('https://www.thesprucepets.com/thmb/OOJSTyWjtZqot2jHbK2og-rpt6g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/swedish-vallhund-breed-profile-4177497-hero-57431dbe614743c8b6752018460b7949.jpg'),
('https://t3.ftcdn.net/jpg/04/43/13/28/360_F_443132873_91SkscKmwLb8qmWePVctWHT0XUZj5b9T.jpg'),
('https://cs-tf.com/wp-content/uploads/2021/08/white-chickens.jpg'),
('https://thumbs.dreamstime.com/b/turtle-3446463.jpg'),
('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Florida_Box_Turtle_Digon3_re-edited.jpg/1200px-Florida_Box_Turtle_Digon3_re-edited.jpg');

insert into animal_image(animalId, imageId) values
(1, 5),
(1, 6),
(1, 7),
(2, 8),
(2, 9),
(2, 10),
(3, 11),
(3, 12),
(3, 13),
(4, 14),
(4, 15),
(4, 16),
(5, 17),
(5, 18),
(5, 19),
(6, 20),
(6, 21),
(6, 22),
(7, 23),
(7, 24),
(7, 25),
(8, 26),
(8, 27),
(8, 28),
(9, 29),
(9, 30),
(9, 31),
(10, 32),
(10, 33),
(10, 34),
(11, 35),
(11, 36),
(11, 37),
(12, 38),
(12, 39),
(12, 40),
(13, 41),
(13, 42),
(14, 43),
(14, 44);