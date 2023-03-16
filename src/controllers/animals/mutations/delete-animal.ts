import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import ForbiddenError from 'errors/forbidden-error';
import { AnimalViewModel } from '../types';
import AnimalModel from '../animals-model';

const deleteAnimal: RequestHandler<
    { id?: string },
    AnimalViewModel | ErrorResponse,
    {},
    {}
> = async (req, res) => {
    const { id } = req.params;

    try {
        if (id === undefined || req.authUser === undefined) throw new ServerSetupError();
        const animalViewModel = await AnimalModel.getAnimal(id);

        if (req.authUser.role !== 'ADMIN' && req.authUser.id !== animalViewModel.fosterer.id) {
          throw new ForbiddenError();
        }

        await AnimalModel.deleteAnimal(id);

        res.status(200).json(animalViewModel);
      } catch (err) {
        handleRequestError(err, res);
      }
};

export default deleteAnimal;
