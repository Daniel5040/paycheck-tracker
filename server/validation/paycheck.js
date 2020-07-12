import Joi from '@hapi/joi'

const closeValidation = (data) => {
  const Schema = Joi.object({
    active: Joi.boolean().required(),
  })

  return Schema.validate(data)
}

export default { closeValidation }
