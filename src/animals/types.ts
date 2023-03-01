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
