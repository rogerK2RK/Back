import { Router } from 'express'
import Car from '../models/Car.js'
import { carCreation/*, idVerification */} from '../middlewares/carValidation.js'

const carRouter = Router()

carRouter.get('/cars', async (req, res) => {
    try {
        const cars = await Car.find()
        if (cars.length < 1) {
            return res.json({ message: 'Cars not found' })
        }
        return res.json(cars)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'Internal server error' })
    }
})

carRouter.post('/car', carCreation, /*idVerification,*/ async (req, res) => {
    let { marque, name, userId } = req.body
    try {
        const newCar = await new Car({
            marque,
            name,
            userId
        })
        newCar.save()
        return res.status(201).json({ message: 'Car has been created' })

    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'Internal server error' })
    }
})


export default carRouter