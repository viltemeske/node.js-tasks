import { RequestHandler } from 'express';
import { animals } from 'animals/data';
import { AnimalModel } from 'animals/types';

const deleteAnimal: RequestHandler<
    { id?: string },
    AnimalModel | ErrorResponse,
    {},
    {}
> = (req, res) => {
    const { id } = req.params;

    if (id === undefined) {
        res.status(400).json({ error: 'server setup error' });
    }

    const foundAnimalIndex = animals.findIndex((animal) => String(animal.id) === id);

    if (foundAnimalIndex === -1) {
        res.status(400).json({ error: `animal whith id '${id}' was nor found` });
    }

    const foundAnimal = animals[foundAnimalIndex];
    animals.splice(foundAnimalIndex, 1);

    res.status(200).json(foundAnimal);
};

export default deleteAnimal;
