import { RequestHandler } from 'express';
import { animals } from 'animals/data';
import { AnimalModel } from 'animals/types';
import ServerSetupError from 'errors/server-setup-error';
import AnimalNotFoundError from 'animals/animal-not-found-error';
import handleRequestError from 'helpers/handle-request-error';

const deleteAnimal: RequestHandler<
    { id?: string },
    AnimalModel | ErrorResponse,
    {},
    {}
> = (req, res) => {
    const { id } = req.params;

    try {
        if (id === undefined) throw new ServerSetupError();

        const foundAnimalIndex = animals.findIndex((animal) => String(animal.id) === id);
        if (foundAnimalIndex === -1) throw new AnimalNotFoundError(id);

        const [foundAnimal] = animals.splice(foundAnimalIndex, 1);

        res.status(200).json(foundAnimal);
      } catch (err) {
        handleRequestError(err, res);
      }
};

export default deleteAnimal;
