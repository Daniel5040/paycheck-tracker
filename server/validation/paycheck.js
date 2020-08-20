import Joi from '@hapi/joi'

const createValidation = (data) => {
  const Schema = Joi.object({
    start: Joi.date().required(),
    end: Joi.date().required(),
    user: Joi.string().required(),
  })

  return Schema.validate(data)
}

const updateDate = (data) => {
  const Schema = Joi.object({
    start: Joi.date(),
    end: Joi.date(),
  })

  return Schema.validate(data)
}

export default { createValidation, updateDate }
