import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import ForbiddenError from 'errors/forbidden-error';
import { AnimalDataBody, AnimalViewModel } from '../types';
import animalDataValidationSchema from '../validation-schemas/animal-validation-schema';
import AnimalModel from '../animals-model';

const putAnimal: RequestHandler<
    { id?: string },
    AnimalViewModel | ErrorResponse,
    AnimalDataBody,
    {}
> = async (req, res) => {
    const { id } = req.params;

    try {
      if (id === undefined || req.authUser === undefined) throw new ServerSetupError();
    const animalToUpdate = await AnimalModel.getAnimal(id);

    if (req.authUser.role !== 'ADMIN' && req.authUser.id !== animalToUpdate.fosterer.id) {
      throw new ForbiddenError();
    }
      const animalData = animalDataValidationSchema.validateSync(req.body);
      const animalViewModel = await AnimalModel.replaceAnimal(id, animalData);

      res.status(200).json(animalViewModel);
    } catch (err) {
      handleRequestError(err, res);
    }
};

export default putAnimal;
