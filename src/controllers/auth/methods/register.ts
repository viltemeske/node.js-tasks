import registrationBodyValidationSchema from 'controllers/animals/validation-schemas/registration-body-validation-schema';
import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import bcrypt from 'bcrypt';
import { RegistrationBody, UserViewModel } from '../types';
import UserModel from '../user-model';

export const register: RequestHandler<
  {},
  UserViewModel | ErrorResponse,
  Partial<RegistrationBody>,
  {}
> = async (req, res) => {
  try {
    const {
      passwordConfirmation,
      password,
      ...userData
    } = registrationBodyValidationSchema.validateSync(req.body, { abortEarly: false });

    await UserModel.checkEmail(userData.email);
    const userViewModel = await UserModel.createUser({
      ...userData,
      password: bcrypt.hashSync(password, 10),
    });

    res.json(userViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};
