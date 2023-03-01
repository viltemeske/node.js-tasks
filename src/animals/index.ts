/* eslint-disable no-console */
import express from 'express';
import getAnimal from './queries/get-animal';
import getAnimals from './queries/get-animals';
import createAnimal from './mutations/create-animal';
import deleteAnimal from './mutations/delete-animal';

const animalsRouter = express.Router();

animalsRouter.get('/', getAnimals);
animalsRouter.get('/:id', getAnimal);

animalsRouter.post('/', createAnimal);

animalsRouter.patch('/:id', (req, res) => {
  res.send('edit one animal');
});

animalsRouter.delete('/:id', deleteAnimal);

export default animalsRouter;
