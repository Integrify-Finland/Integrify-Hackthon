import Customer, { CustomerDocument } from '../models/Customer'
import { NotFoundError } from '../helpers/apiError'

// create
const create = async (customer: CustomerDocument): Promise<CustomerDocument> => {
  return customer.save()
}

// findAll
const findAll = async (): Promise<CustomerDocument[]> => {
  return Customer.find()
}

// findById
const findById = async (customerId: string): Promise<CustomerDocument> => {
  const foundCustomer = await Customer.findById(customerId)

  if (!foundCustomer) {
    throw new NotFoundError(`Customer ${customerId} not found`)
  }

  return foundCustomer
}

// update
const update = async (
  customerId: string,
  update: Partial<CustomerDocument>
): Promise<CustomerDocument | null> => {
  const foundCustomer = await Customer.findByIdAndUpdate(customerId, update, {
    new: true,
  })

  if (!foundCustomer) {
    throw new NotFoundError(`Customer ${customerId} not found`)
  }

  return foundCustomer
}

// delete user
const deleteCustomer = async (customerId: string): Promise<CustomerDocument | null> => {
  const foundCustomer = Customer.findByIdAndDelete(customerId)

  if (!foundCustomer) {
    throw new NotFoundError(`Customer ${customerId} not found`)
  }

  return foundCustomer
}

export default {
  create,
  findAll,
  findById,
  update,
  deleteCustomer,
}