import Joi from '@hapi/joi'

const updateValidation = (data) => {
  const Schema = Joi.object({
    active: Joi.boolean(),
    'days-worked': Joi.number().integer().min(0).max(14),
    credit: Joi.number().min(0),
    cash: Joi.number().min(0),
  })

  return Schema.validate(data)
}

export default { updateValidation }
