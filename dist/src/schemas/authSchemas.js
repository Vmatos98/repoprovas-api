import Joi from 'joi';
export const loginSChema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});
export const siginSChema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required()
});
