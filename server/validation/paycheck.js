import Joi from '@hapi/joi'

const createValidation = (data) => {
  const Schema = Joi.object({
    credit: Joi.number().min(0).required(),
    cash: Joi.number().min(0).required(),
  })

  return Schema.validate(data)
}

const updateValidation = (data) => {
  const Schema = Joi.object({
    active: Joi.boolean(),
    'days-worked': Joi.number().integer().min(0).max(14),
    credit: Joi.number().min(0),
    cash: Joi.number().min(0),
  })

  return Schema.validate(data)
}

export default { createValidation, updateValidation }
