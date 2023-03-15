import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import { AnimalViewModel } from 'animals/types';
import AnimalModel from 'animals/animals-model';

const deleteAnimal: RequestHandler<
    { id?: string },
    AnimalViewModel | ErrorResponse,
    {},
    {}
> = async (req, res) => {
    const { id } = req.params;

    try {
        if (id === undefined) throw new ServerSetupError();
        const animalViewModel = await AnimalModel.getAnimal(id);
        await AnimalModel.deleteAnimal(id);

        res.status(200).json(animalViewModel);
      } catch (err) {
        handleRequestError(err, res);
      }
};

export default deleteAnimal;
