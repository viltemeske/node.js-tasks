const dbData = require('../old-data/db.json');
const { usersEmailIdMap } = require('./create-users');

const imagesInsertionRows = dbData.animals.map(x => x.images).flat()
    .map(x => `('${x}')`)
    .join(',\n');

const imagesInsertionSql = `
insert into image(src) values
${imagesInsertionRows};
`;

let imgId = Object.keys(usersEmailIdMap).length + 2;
const animalImagesInsertionRows = dbData.animals
    .reduce((animalsImages, animal, i) => {
        const animalId = i + 1;
        const animalImages = animal.images.map(x => ({ animalId, imageId: imgId++ }))

        return animalsImages.concat(animalImages)
    }, [])
    .map(({ animalId, imageId }) => `(${animalId}, ${imageId})`)
    .join(',\n');

const animalImagesInsertionSql = `
insert into animal_image(animalId, imageId) values
${animalImagesInsertionRows};
`
console.log(imagesInsertionSql)
console.log(animalImagesInsertionSql)
