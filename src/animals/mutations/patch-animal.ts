import { AnimalDataBody, AnimalViewModel } from 'animals/types';
import { RequestHandler } from 'express';
import partialAnimalDataValidationSchema from 'animals/validation-schemas/partial-animal-validation-schema ';
import handleRequestError from 'helpers/handle-request-error';
import AnimalNotFoundError from 'animals/animal-not-found-error';
import ServerSetupError from 'errors/server-setup-error';

const patchAnimal: RequestHandler<
    { id?: string },
    AnimalViewModel | ErrorResponse,
    AnimalDataBody,
    {}
> = (req, res) => {
    const { id } = req.params;

    try {
        if (id === undefined) throw new ServerSetupError();
        const animalData = partialAnimalDataValidationSchema.validateSync(req.body);
        const foundAnimal = animals.find((animal) => String(animal.id) === id);

        if (foundAnimal === undefined) throw new AnimalNotFoundError(id);

        Object.assign(foundAnimal, animalData);

        res.status(200).json(foundAnimal);
      } catch (err) {
        handleRequestError(err, res);
      }
};

export default patchAnimal;
