import * as yup from 'yup';
import { AnimalData } from '../types';

const animalDataValidationSchema: yup.ObjectSchema<AnimalData> = yup.object({
    name: yup.string()
        .required('name is required')
        .min(2, 'name must have at least 2 letters')
        .max(32, 'name can\'t have more than 32 letters'),

    age: yup.number()
        .required('age is required')
        .positive('age must be positive')
        .test(
            'ageFormat',
            'age can\'t have more than 1 decimal point',
            (value) => value === undefined || Number(value.toFixed(1)) === value,
        ),

    images: yup
        .array(yup.string().required().url('image must be accessible'))
        .min(1, 'ar least one image required')
        .required('images are required'),

    animalSpeciesId: yup.number()
        .required('species is required'),
}).strict(true);

export default animalDataValidationSchema;
