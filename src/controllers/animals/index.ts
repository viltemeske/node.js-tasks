import express from 'express';
import jwtTokenMiddleware from 'middlewares/jwt-token-middleware';
import getAnimal from './queries/get-animal';
import getAnimals from './queries/get-animals';
import createAnimal from './mutations/create-animal';
import deleteAnimal from './mutations/delete-animal';
import putAnimal from './mutations/put-animal';

const animalsControler = express.Router();

animalsControler.get('/', getAnimals);
animalsControler.get('/:id', getAnimal);

animalsControler.post('/', jwtTokenMiddleware, createAnimal);
animalsControler.put('/:id', jwtTokenMiddleware, putAnimal);
animalsControler.delete('/:id', jwtTokenMiddleware, deleteAnimal);

export default animalsControler;
