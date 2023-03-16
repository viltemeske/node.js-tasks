import { RequestHandler } from 'express';
import AnimalModel from '../animals-model';
import { AnimalViewModel } from '../types';

const getAnimals: RequestHandler<
  {},
  AnimalViewModel[],
  undefined,
  {}
> = async (req, res) => {
  const animalViewModelArray = await AnimalModel.getAnimals();
  res.json(animalViewModelArray);
};

export default getAnimals;
