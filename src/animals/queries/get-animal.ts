import { RequestHandler } from 'express';
import { AnimalViewModel } from 'animals/types';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import AnimalModel from 'animals/animals-model';

const getAnimal: RequestHandler<
  { id?: string },
  AnimalViewModel | ErrorResponse,
  undefined,
  {}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const animalViewModel = await AnimalModel.getAnimal(id);

    res.json(animalViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default getAnimal;
