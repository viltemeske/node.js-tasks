/* eslint-disable no-console */
import express from 'express';
import getAnimal from './queries/get-animal';
import getAnimals from './queries/get-animals';
import createAnimal from './mutations/create-animal';
import deleteAnimal from './mutations/delete-animal';
import putAnimal from './mutations/put-animal';
import patchAnimal from './mutations/patch-animal';

const animalsRouter = express.Router();

animalsRouter.get('/', getAnimals);
animalsRouter.get('/:id', getAnimal);
animalsRouter.post('/', createAnimal);
animalsRouter.put('/:id', putAnimal);
animalsRouter.patch('/:id', patchAnimal);
animalsRouter.delete('/:id', deleteAnimal);

export default animalsRouter;
