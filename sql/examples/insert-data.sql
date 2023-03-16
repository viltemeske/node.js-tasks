insert into animal (name, age, animalSpeciesId) values
('Muka', 3, 5, 2);

set @created_animal_id = last_insert_id();

insert into image (src) values
('foto 1'),
('foto 2'),
('foto 3');

set @first_image_id = last_insert_id();

insert into animalimage(imageId, animalId)
select imageId, @created_animal_id as animalId
from image
where imageId >= @first_image_id;