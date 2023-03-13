import NotFoundError from 'errors/not-found-error';

class AnimalNotFoundError extends NotFoundError {
  constructor(id: string) {
    super(`Animal with id '${id}' was not found`);
  }
}

export default AnimalNotFoundError;
