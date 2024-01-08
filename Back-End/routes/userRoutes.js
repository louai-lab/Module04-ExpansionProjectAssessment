import express from 'express'

import {getAllUsers , register , deleteUser} from '../controllers/userControllers.js'

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/register', register)
userRouter.delete('/delete/:id',deleteUser);


export default userRouter