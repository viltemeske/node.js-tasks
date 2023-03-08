create table speciesType (
	speciesTypeId int4 unsigned primary key auto_increment,
	title varchar(256) not null unique,
	cretedAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp
);

create table animalSpecies (
	animalSpeciesId int4 unsigned primary key auto_increment,
	title varchar(256) not null,
    speciesTypeId int4 unsigned not null,
	cretedAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp,
    foreign key (speciesTypeId) references speciesType(speciesTypeId)
);

create table image (
 	imageId int4 unsigned primary key auto_increment,
	src varchar(256) not null,
    cretedAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp
);

create table user (
	userId int4 unsigned primary key auto_increment,
    email varchar(64) not null unique,
    password varchar(64) not null,
    name varchar(64) not null,
    surname varchar(64) not null,
    mobile varchar(16) not null,
    role enum('USER', 'ADMIN') not null,
    imageId int4 unsigned not null unique,
	cretedAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp,
    foreign key (imageId) references image(imageId)
);

create table animal (
	animalId int4 unsigned primary key auto_increment,
    name varchar(64) not null,
    age int not null,
    animalSpeciesId int4 unsigned not null,
    userId int4 unsigned not null,
	cretedAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp,
    foreign key (animalSpeciesId) references animalSpecies(animalSpeciesId),
    foreign key (userId) references user(userId)
);

create table animalImage (
	imageId int4 unsigned not null,
    animalId int4 unsigned not null,
	cretedAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp,
    foreign key (imageId) references image(imageId),
    foreign key (animalId) references animal(animalId),
    primary key (imageId) 
);