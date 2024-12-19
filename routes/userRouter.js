import { Router } from 'express'
import { emailVerification, userCreation } from '../middlewares/userValidation.js'
import { createUser, deleteUserByID, getAllUsers, getUserByID, updateUserByID } from '../controllers/userController.js'

const userRouter = Router()

userRouter.get('/users', getAllUsers)

userRouter.post('/user',userCreation, emailVerification, createUser)


userRouter.get('/user/:id', getUserByID)

userRouter.put('/user/:id', updateUserByID)

userRouter.delete('/user/:id',deleteUserByID)

export default userRouter