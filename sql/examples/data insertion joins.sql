select
	a.animalId as id,
	a.name,
	a.age, 
	json_object(
		'rūšis', sp.title,
		'tipas', st.title
	) as tipas, 
    json_object(
		'id', u.userId,
        'name', u.name,
        'surname', u.surname,
        'mobile', u.mobile,
        'email', u.email
	) as fosterer,
-- count(a.animalId)
-- sum(a.userId)
-- a.animalId, count(i.src)
a.animalId, json_arrayagg(i.src) as images
from animal as a 
join user u
on a.userId = u.userId
join animalspecies as sp
on a.animalSpeciesId = sp.animalSpeciesId
join speciestype as st
on sp.speciesTypeId = st.speciesTypeId
join animalimage as ai
on a.animalId = ai.animalId
join image as i
on ai.imageId = i.imageId
group by a.animalId
