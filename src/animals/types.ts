export type AnimalModel = {
  id: number,
  name: string,
  type: {
    type: string,
    species: string,
  },
  age: number,
  images: string[],
};

export type AnimalData = Omit<AnimalModel, 'id'>;

export type AnimalDataBody = PartialRecursive<AnimalData>;

export type PartialAnimalData = Partial<AnimalData>;
