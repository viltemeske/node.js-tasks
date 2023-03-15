import { AnimalDataBody, AnimalViewModel } from 'animals/types';
import { RequestHandler } from 'express';
import animalDataValidationSchema from 'animals/validation-schemas/animal-validation-schema';
import { animals } from 'animals/data';
import AnimalNotFoundError from 'animals/animal-not-found-error';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';

const putAnimal: RequestHandler<
    { id?: string },
    AnimalViewModel | ErrorResponse,
    AnimalDataBody,
    {}
> = (req, res) => {
    const { id } = req.params;

    if (id === undefined) throw new ServerSetupError();

    try {
      const animalData = animalDataValidationSchema.validateSync(req.body);
      const foundAnimalIndex = animals.findIndex((animal) => String(animal.id) === id);
      if (foundAnimalIndex === -1) throw new AnimalNotFoundError(id);

      const updatedAnimal = { id: animals[foundAnimalIndex].id, ...animalData };

      animals.splice(foundAnimalIndex, 1, updatedAnimal);

      res.status(200).json(updatedAnimal);
    } catch (err) {
      handleRequestError(err, res);
    }
};

export default putAnimal;
