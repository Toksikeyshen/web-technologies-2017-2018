import Joi from 'joi'
import { constants } from '../services/constants'
import movies from '../services/movies'

const sortSchema = Joi.object().keys({
    q: Joi.string().default(constants.sort.field),
    t: Joi.string().default(constants.sort.up)
})

const searchSchema = Joi.object().keys({
    q: Joi.string().required()
})

const pageSchema = Joi.object().keys({
    off: Joi.number()
        .min(0)
        .max(movies.length - 1)
        .default(constants.page.offset)
        .integer(),
    lim: Joi.number()
        .min(1)
        .max(movies.length)
        .default(constants.page.limit)
        .integer()
})

const idSchema = Joi.object().keys({
    id: Joi.number()
        .integer()
        .positive()
})

export const validation = {
    sortSchema,
    searchSchema,
    pageSchema,
    idSchema
}