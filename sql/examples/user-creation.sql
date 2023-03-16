insert into image (src) VALUE ('https://www.petful.com/wp-content/uploads/2020/01/signs-that-you-are-a-crazy-cat-lady.jpg');

insert into user (email, password, name, surname, mobile, imageId) VALUE 
('crazy@catlady.com', 'Ilovecatzzz123?', 'Crazy', 'Cat-Lady', '+370 123 12345', last_insert_id());