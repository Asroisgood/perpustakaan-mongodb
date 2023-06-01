import express from 'express'
import {
  getUser,
  saveUser,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/UserController.js'

const router = express.Router()

router.get('/user', getUser)
router.post('/user', saveUser)
router.get('/user:/id', getUserById)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

export default router
