import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import AnimalModel from '../animals-model';
import { AnimalDataBody, AnimalViewModel } from '../types';
import animalDataValidationSchema from '../validation-schemas/animal-validation-schema';

const createAnimal: RequestHandler<
{},
AnimalViewModel | ErrorResponse,
AnimalDataBody,
{}
> = async (req, res) => {
try {
   const animalData = animalDataValidationSchema.validateSync(req.body, { abortEarly: false });
   const animalViewModel = await AnimalModel.createAnimal(animalData);

   res.status(201).json(animalViewModel);
   } catch (error) {
       handleRequestError(error, res);
   }
};

export default createAnimal;
