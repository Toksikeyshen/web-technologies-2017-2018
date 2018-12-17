import express from 'express'
import { controllers } from '../controllers/controllers'

const router = express.Router()

router.get('/all', controllers.all)
router.get('/sort', controllers.sort)
router.get('/search', controllers.search)
router.get('/get/:id', controllers.id)
router.get('/pagination', controllers.page)

export default router