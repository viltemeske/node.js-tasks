update animal
set name = 'naujas', age= 99, animalSpeciesId=5
where animalId = 2;

set @animalImagesIds = (
	select group_concat(imageId) 
    from animalimage
    where animalId = 2
    group by animalId);

delete from animalimage
where animalId = 2;

delete from image
where find_in_set(imageId, @animalImagesIds);

insert into image (src) values
('foto 1'),
('foto 2'),
('foto 3');

set @first_image_id = last_insert_id();

insert into animalimage(imageId, animalId)
select imageId, 2 as animalId
from image
where imageId >= @first_image_id;