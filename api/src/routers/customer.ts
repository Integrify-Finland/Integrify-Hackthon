import express from 'express'

import {
  createCustomer,
  findAllCustomers,
  findCustomerById,
  updateCustomerById,
  deleteCustomerById,
} from '../controllers/customer'

const router = express.Router()

// Every path we define here will get/api/v1/users prefix
router.post('/', createCustomer)
router.get('/', findAllCustomers)
router.get('/:customerId', findCustomerById)
router.put('/:customerId', updateCustomerById)
router.delete('/:customerId', deleteCustomerById)

export default router