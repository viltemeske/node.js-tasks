import { AnimalModel, PartialAnimalData } from 'animals/types';
import { RequestHandler } from 'express';
import animalDataValidationSchema from 'animals/validation-schemas/animal-validation-schema';
import { animals } from 'animals/data';

const replaceAnimal: RequestHandler<
    { id?: string },
    AnimalModel | ErrorResponse,
    PartialAnimalData,
    {}
> = (req, res) => {
    const { id } = req.params;

    if (id === undefined) {
        res.status(400).json({ error: 'Server setup error' });
        return;
    }

    try {
        const animalData = animalDataValidationSchema.validateSync(req.body);
        const foundAnimalIndex = animals.findIndex((animal) => String(animal.id) === id);

        if (foundAnimalIndex === -1) {
            res.status(400).json({ error: `animal whith id '${id}' was nor found` });
        }
        const updatedAnimal = {
            id: animals[foundAnimalIndex].id,
            ...animalData,
        };
        animals.splice(foundAnimalIndex, 1, updatedAnimal);

        res.status(200).json(updatedAnimal);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'server error';
        res.status(400).json({ error: message });
    }
};

export default replaceAnimal;
