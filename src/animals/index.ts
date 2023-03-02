/* eslint-disable no-console */
import express from 'express';
import getAnimal from './queries/get-animal';
import getAnimals from './queries/get-animals';
import createAnimal from './mutations/create-animal';
import deleteAnimal from './mutations/delete-animal';
import replaceAnimal from './mutations/replace-animal';

const animalsRouter = express.Router();

animalsRouter.get('/', getAnimals);
animalsRouter.get('/:id', getAnimal);
animalsRouter.post('/', createAnimal);
animalsRouter.put('/:id', replaceAnimal);
// animalsRouter.patch('/:id', updateAnimal);
animalsRouter.delete('/:id', deleteAnimal);

export default animalsRouter;
