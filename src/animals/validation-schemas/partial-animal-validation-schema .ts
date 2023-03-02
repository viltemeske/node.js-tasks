import * as yup from 'yup';
import { PartialAnimalData } from 'animals/types';

const partialAnimalDataValidationSchema: yup.ObjectSchema<PartialAnimalData> = yup.object({
    name: yup.string()
        .min(2, 'name must have at least 2 letters')
        .max(32, 'name can\'t have more than 32 letters'),

    type: yup
        .object({
            type: yup.string()
                .required('type.type is required')
                .min(2, 'type.type must have at least 2 letters')
                .max(32, 'type.type can\'t have more than 32 letters'),

            species: yup.string()
                .required('type.species is required')
                .min(2, 'type.species must have at least 2 letters')
                .max(32, 'type.species can\'t have more than 32 letters'),
        }),

    age: yup.number()

        .positive('age must be positive')
        .moreThan(0, 'age must be positive')
        .test(
            'ageFormat',
            'age can\'t have more than 1 decimal point',
            (value) => value === undefined || Number(value.toFixed(1)) === value,
        ),
    images: yup
        .array(yup.string().required()),
    /* rating: yup.number()
       .positive('rating must be positive')
        .min(1, 'rating must at least one'),
        .max(5, 'rating must be 5 or less than 5'), */
}).strict(true);

export default partialAnimalDataValidationSchema;
