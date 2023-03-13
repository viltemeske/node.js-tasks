import * as yup from 'yup';
import { PartialAnimalData } from 'animals/types';

const partialAnimalDataValidationSchema: yup.ObjectSchema<PartialAnimalData> = yup.object({
    name: yup.string()
        .min(2, 'name must have at least 2 letters')
        .max(32, 'name can\'t have more than 32 letters'),

    age: yup.number()
        .positive('age must be positive')
        .test(
            'ageFormat',
            'age can\'t have more than 1 decimal point',
            (value) => value === undefined || Number(value.toFixed(1)) === value,
        ),

    images: yup
        .array(yup.string().required('images are required')),

    animalSpeciesId: yup.number(),
}).strict(true);

export default partialAnimalDataValidationSchema;
