/* eslint-disable no-console */
import express from 'express';
import getAnimal from './queries/get-animal';
import getAnimals from './queries/get-animals';

const animalsRouter = express.Router();

animalsRouter.get('/', getAnimals);
animalsRouter.get('/:id', getAnimal);

animalsRouter.post('/', (req, res) => {
  console.log(req.body);
  res.send('post one animal');
});

animalsRouter.patch('/:id', (req, res) => {
  res.send('edit one animal');
});

animalsRouter.delete('/:id', (req, res) => {
  res.send('delete one animal');
});
export default animalsRouter;
