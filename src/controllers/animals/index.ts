import express from 'express';
import getAnimal from './queries/get-animal';
import getAnimals from './queries/get-animals';
import createAnimal from './mutations/create-animal';
import deleteAnimal from './mutations/delete-animal';
import putAnimal from './mutations/put-animal';

const animalsControler = express.Router();

animalsControler.get('/', getAnimals);
animalsControler.get('/:id', getAnimal);
animalsControler.post('/', createAnimal);
animalsControler.put('/:id', putAnimal);
animalsControler.delete('/:id', deleteAnimal);

export default animalsControler;
