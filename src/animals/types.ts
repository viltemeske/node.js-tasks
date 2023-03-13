export type AnimalModel = {
  id: number,
  name: string,
  age: number,
  type: {
    type: string,
    species: string,
  },
  fosterer: {
    id: number,
    name: string,
    surname: string,
    email: string,
    mobile: string,
  }
  images: string[],
};

export type AnimalData = Omit<AnimalModel, 'id' | 'fosterer' | 'type'> & {
animalSpeciesId: number
};

export type AnimalDataBody = PartialRecursive<AnimalData>;

export type PartialAnimalData = Partial<AnimalData>;
