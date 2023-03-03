import { RequestHandler } from 'express';
import { animals } from 'animals/data';
import { AnimalModel } from 'animals/types';
import ServerSetupError from 'errors/server-setup-error';
import AnimalNotFoundError from 'animals/animal-not-found-error';
import handleRequestError from 'helpers/handle-request-error';

const getAnimal: RequestHandler<
{ id?: string },
AnimalModel | ErrorResponse,
undefined,
{}
> = (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const foundAnimal = animals.find((animal) => String(animal.id) === id);
    if (foundAnimal === undefined) throw new AnimalNotFoundError(id);

    res.status(200).json(foundAnimal);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default getAnimal;
