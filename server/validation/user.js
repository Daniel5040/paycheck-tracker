import Joi from '@hapi/joi'

const registerValidation = (data) => {
  const Schema = Joi.object({
    name: Joi.string().alphanum().required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: Joi.ref('password'),
    wage: Joi.number().required(),
  })

  return Schema.validate(data)
}

const loginValidation = (data) => {
  const Schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  })

  return Schema.validate(data)
}

const updateInfoValidation = (data) => {
  const Schema = Joi.object({
    name: Joi.string().alphanum().required(),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: Joi.ref('password'),
    wage: Joi.number().required(),
  })

  return Schema.validate(data)
}

const updatePasswordValidation = (data) => {
  const Schema = Joi.object({
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: Joi.ref('password'),
  })

  return Schema.validate(data)
}

export default { registerValidation, loginValidation, updateInfoValidation, updatePasswordValidation }
