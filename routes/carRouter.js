import { Router } from 'express'
import { getAllCars, createCar } from '../controllers/carController.js'
import { verifyToken } from '../middlewares/userValidation.js'

const carRouter = Router()

carRouter.get('/cars', verifyToken, getAllCars)
carRouter.post('/car', createCar)


export default carRouter