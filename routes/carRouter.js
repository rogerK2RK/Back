import { Router } from 'express'
import { getAllCars, createCar } from '../controllers/carController.js'

const carRouter = Router()

carRouter.get('/cars', getAllCars)
carRouter.post('/car', createCar)


export default carRouter