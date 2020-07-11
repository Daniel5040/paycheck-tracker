import Joi from '@hapi/joi'

const createValidation = (data) => {
  const Schema = Joi.object({
    hours: Joi.number().integer().min(0).max(24).required(),
    minutes: Joi.number().integer().min(0).max(60).required(),
    credit: Joi.number().min(0).required(),
    cash: Joi.number().min(0).required(),
  })

  return Schema.validate(data)
}

const updateValidation = (data) => {
  const Schema = Joi.object({
    hours: Joi.number().integer().min(0).max(24),
    minutes: Joi.number().integer().min(0).max(60),
    credit: Joi.number().min(0),
    cash: Joi.number().min(0),
  })

  return Schema.validate(data)
}

export default { createValidation, updateValidation }
