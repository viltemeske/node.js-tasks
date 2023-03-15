import { RequestHandler } from 'express';
import { AnimalViewModel, AnimalDataBody } from 'animals/types';
import animalDataValidationSchema from 'animals/validation-schemas/animal-validation-schema';
import handleRequestError from 'helpers/handle-request-error';
import AnimalModel from 'animals/animals-model';

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
