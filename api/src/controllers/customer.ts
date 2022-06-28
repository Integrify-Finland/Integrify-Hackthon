import { Request, Response, NextFunction } from 'express'

import Customer from '../models/Customer'
import CustomerService from '../services/customer'
import { BadRequestError } from '../helpers/apiError'

// POST /customers
export const createCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      customerName,
      project,
      activity,
      billable,
      hourlyRate,
      monthlyRate,
    } = req.body

    const customer = new Customer({
      customerName,
      project,
      activity,
      billable,
      hourlyRate,
      monthlyRate,
    })

    // const customer = new Customer({
    //   customerName: 'ABS Solutions',
    //   project: 'FeetB',
    //   activity: 'Development',
    //   billable: 'Yes',
    //   hourlyRate: 80,
    //   monthlyRate: 0,
    // })

    await CustomerService.create(customer)
    res.json(customer)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /customers
export const findAllCustomers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await CustomerService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /customers/:customerId
export const findCustomerById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await CustomerService.findById(req.params.customerId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /customers/:customerId
export const updateCustomerById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const customerId = req.params.customerId
    const updatedCustomer = await CustomerService.update(customerId, update)
    res.json(updatedCustomer)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /customers/:customerId
export const deleteCustomerById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await CustomerService.deleteCustomer(req.params.customerId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
