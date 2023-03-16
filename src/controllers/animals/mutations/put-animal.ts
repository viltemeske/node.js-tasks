import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
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

    if (id === undefined) throw new ServerSetupError();

    try {
      const animalData = animalDataValidationSchema.validateSync(req.body);
      const animalViewModel = await AnimalModel.replaceAnimal(id, animalData);

      res.status(200).json(animalViewModel);
    } catch (err) {
      handleRequestError(err, res);
    }
};

export default putAnimal;
