import { Request, Response, NextFunction } from 'express'

import Timesheet from '../models/Timesheet'
import TimesheetService from '../services/timesheet'
import { BadRequestError } from '../helpers/apiError'

// POST /timesheets
export const createTimesheet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      date,
      from,
      to,
      duration,
      rate,
      userName,
      customerName,
      exported,
    } = req.body

    const timesheet = new Timesheet({
      date,
      from,
      to,
      duration,
      rate,
      userName,
      customerName,
      exported,
    })

    // const customer = new Customer({
    //   customerName: 'ABS Solutions',
    //   project: 'FeetB',
    //   activity: 'Development',
    //   billable: 'Yes',
    //   hourlyRate: 80,
    //   monthlyRate: 0,
    // })

    await TimesheetService.create(timesheet)
    res.json(timesheet)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /timesheets
export const findAllTimesheets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await TimesheetService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /timesheets/:timesheetId
export const findTimesheetById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await TimesheetService.findById(req.params.timesheetId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT  /timesheets/:timesheetId
export const updateTimesheetById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const timesheetId = req.params.timesheetId
    const updatedTimesheet = await TimesheetService.update(timesheetId, update)
    res.json(updatedTimesheet)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /timesheets/:timesheetId
export const deleteTimesheetById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await TimesheetService.deleteTimesheet(req.params.timesheetId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}