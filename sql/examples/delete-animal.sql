SET @animalimagesIds = (
    select group_concat(imageId) 
    from animalimage 
    where animalId = 1
    group by animalId);  

  DELETE from animalimage
  WHERE animalId = 1;

  DELETE from image
  WHERE find_in_set(imageId, @animalimagesIds);

  DELETE from animal
  WHERE animalId = 1;