import { RequestHandler } from 'express';
import { animals } from 'animals/data';
import { AnimalModel } from 'animals/types';

const getAnimal: RequestHandler<
{ id?: string },
AnimalModel | ErrorResponse,
undefined,
{}
> = (req, res) => {
  const { id } = req.params;

  if (id === undefined) {
    res.status(400).json({ error: 'Server setup error' });
    return;
  }
  const foundAnimal = animals.find((animal) => String(animal.id) === id);

  if (foundAnimal === undefined) {
    res.sendStatus(404).json({ error: `Animal whith '${id}' was nor find` });
    return;
  }

  res.status(200).json(foundAnimal);
};

export default getAnimal;
