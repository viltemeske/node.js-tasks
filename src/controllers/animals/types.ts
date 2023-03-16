export type AnimalViewModel = {
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

export type AnimalData = Omit<AnimalViewModel, 'id' | 'fosterer' | 'type'> & {
animalSpeciesId: number
};

export type AnimalDataBody = PartialRecursive<AnimalData>;

export type PartialAnimalData = Partial<AnimalData>;
