import { AnimalModel, AnimalDataBody } from 'animals/types';
import { RequestHandler } from 'express';
import partialAnimalDataValidationSchema from 'animals/validation-schemas/animal-validation-schema';
import { animals } from 'animals/data';

const patchAnimal: RequestHandler<
    { id?: string },
    AnimalModel | ErrorResponse,
    AnimalDataBody,
    {}
> = (req, res) => {
    const { id } = req.params;

    if (id === undefined) {
        res.status(400).json({ error: 'Server setup error' });
        return;
    }

    try {
        const animalData = partialAnimalDataValidationSchema.validateSync(req.body);
        const foundAnimalIndex = animals.findIndex((animal) => String(animal.id) === id);

        if (foundAnimalIndex === -1) {
            res.status(400).json({ error: `animal whith id '${id}' was nor found` });
        }
        const updatedAnimal = {
            ...animals[foundAnimalIndex],
            ...animalData,
        };
        animals.splice(foundAnimalIndex, 1, updatedAnimal);

        res.status(200).json(updatedAnimal);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'server error';
        res.status(400).json({ error: message });
    }
};

export default patchAnimal;
