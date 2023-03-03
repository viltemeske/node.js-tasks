import { RequestHandler } from 'express';
import { animals } from 'animals/data';
import { AnimalModel, AnimalDataBody } from 'animals/types';
import animalDataValidationSchema from 'animals/validation-schemas/animal-validation-schema';
import { createId } from 'helpers/create-id';
import handleRequestError from 'helpers/handle-request-error';

const createAnimal: RequestHandler<
{},
AnimalModel | ErrorResponse,
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
       handleRequestError(err, res);
   }
};

export default createAnimal;
