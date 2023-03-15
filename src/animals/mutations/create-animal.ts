import { RequestHandler } from 'express';
import { AnimalViewModel, AnimalDataBody } from 'animals/types';
import animalDataValidationSchema from 'animals/validation-schemas/animal-validation-schema';
import handleRequestError from 'helpers/handle-request-error';
import { createId } from 'helpers/create-id';

const createAnimal: RequestHandler<
{},
AnimalViewModel | ErrorResponse,
AnimalDataBody,
{}
> = (req, res) => {
try {
   const animalData = animalDataValidationSchema.validateSync(req.body, { abortEarly: false });
   const createdAnimal = {
      id: createId(),
      ...animalData,
   };

   animals.push(createdAnimal);

   res.status(201).json(createdAnimal);
   } catch (error) {
       handleRequestError(error, res);
   }
};

export default createAnimal;
