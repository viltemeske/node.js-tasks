const createAnimalsImages = (animals, lastImgId) => {
    const imagesInsertionRows = animals.map(x => x.images).flat()
        .map(x => `('${x}')`)
        .join(',\n');

    const imagesInsertionSql = `
insert into image(src) values
${imagesInsertionRows};
`;

    let imgId = lastImgId + 1;
    const animalImagesInsertionRows = animals
        .reduce((animalsImages, animal, i) => {
            const animalId = i + 1;
            const animalImages = animal.images.map(x => ({ animalId, imageId: imgId++ }))

            return animalsImages.concat(animalImages);
        }, [])
        .map(({ animalId, imageId }) => `(${animalId}, ${imageId})`)
        .join(',\n');

const animalImagesInsertionSql = `
insert into animal_image(animalId, imageId) values
${animalImagesInsertionRows};`;

    return imagesInsertionSql + animalImagesInsertionSql;
}

module.exports = createAnimalsImages;
