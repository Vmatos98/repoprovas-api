import Joi from 'joi';

import {createUserData} from '../services/authService.js';

type newUserData = createUserData & {
    confirmPassword: string;
}


export const loginSChema = Joi.object<createUserData>({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

export const siginSChema = Joi.object<newUserData>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required()
})

