const createAnimalsImages = (animals, startWithId) => {
    const imagesInsertionRows = animals.map(x => x.images).flat()
        .map(x => `('${x}')`)
        .join(',\n');

    const imagesInsertionSql = `
insert into image(src) values
${imagesInsertionRows};
`;
    let imgId = startWithId;
    const animalImagesInsertionRows = animals
        .reduce((animalsImages, animal, i) => {
            const animalId = i + 1;
            const animalImages = animal.images.map(x => ({ animalId, imageId: imgId++ }))

            return animalsImages.concat(animalImages);
        }, [])
        .map(({ animalId, imageId }) => `(${animalId}, ${imageId})`)
        .join(',\n');

const animalImagesInsertionSql = `
insert into animalimage(animalId, imageId) values
${animalImagesInsertionRows};`;

    return imagesInsertionSql + animalImagesInsertionSql;
}

module.exports = createAnimalsImages;
