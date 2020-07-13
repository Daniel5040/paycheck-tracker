import Joi from '@hapi/joi'

const createValidation = (data) => {
  const Schema = Joi.object({
    start: Joi.date().required(),
    end: Joi.date().required(),
    credit: Joi.number().min(0).required(),
    cash: Joi.number().min(0).required(),
    paycheck: Joi.string().required(),
    user: Joi.string().required(),
  })

  return Schema.validate(data)
}

const updateValidation = (data) => {
  const Schema = Joi.object({
    start: Joi.date(),
    end: Joi.date(),
    credit: Joi.number().min(0),
    cash: Joi.number().min(0),
  })

  return Schema.validate(data)
}

export default { createValidation, updateValidation }
