import Car from '../models/Car.js'
import User from '../models/User.js'



export const carCreation = (req, res, next) => {
    const { marque, name, idUser } = req.body
    if (!marque || !name, idUser ) {
        return res.json({ message: 'All fields are required' })
    }
    next()
}

// export const idVerification = async (req, res, next) => {
//     const { idUser } = req.body
//     const searchIdUserByEmail = await User.findOne({ idUser : id })
//     if (!searchIdUserByEmail) {
//         return res.status(400).json({ message: 'Id dounst existe' })
//     }
//     next()
// }