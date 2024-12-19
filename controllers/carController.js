import Car from '../models/Car.js'

export const getAllCars = async (req, res) => {
    const cars = await Car.find().populate('user_id', '-password')
    return res.json(cars)
}

export const createCar = async (req, res, next) => {
    const { marque, name, user_id  } = req.body
    const newCar = await new Car(req.body)
    newCar.save()
    return res.json(newCar)

}