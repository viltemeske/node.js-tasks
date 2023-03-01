import { RequestHandler } from 'express';
import { animals } from 'animals/data';
import { AnimalModel } from '../types';

const getAnimals: RequestHandler<
{},
AnimalModel[],
undefined,
{}
> = (req, res) => {
  res.json(animals);
};

export default getAnimals;
