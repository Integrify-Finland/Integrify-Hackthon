import Timesheet, { TimesheetDocument } from '../models/Timesheet'
import { NotFoundError } from '../helpers/apiError'

// create
const create = async (
  timesheet: TimesheetDocument
): Promise<TimesheetDocument> => {
  return timesheet.save()
}

// findAll
const findAll = async (): Promise<TimesheetDocument[]> => {
  return Timesheet.find()
}

// findById
const findById = async (timesheetId: string): Promise<TimesheetDocument> => {
  const foundTimesheet = await Timesheet.findById(timesheetId)
    .populate('userName')
    .populate('customerName')

  if (!foundTimesheet) {
    throw new NotFoundError(`Timesheet ${timesheetId} not found`)
  }

  return foundTimesheet
}

// update
const update = async (
  timesheetId: string,
  update: Partial<TimesheetDocument>
): Promise<TimesheetDocument | null> => {
  const foundTimesheet = await Timesheet.findByIdAndUpdate(
    timesheetId,
    update,
    {
      new: true,
    }
  )

  if (!foundTimesheet) {
    throw new NotFoundError(`Timesheet ${timesheetId} not found`)
  }

  return foundTimesheet
}

// delete timesheet
const deleteTimesheet = async (
  timesheetId: string
): Promise<TimesheetDocument | null> => {
  const foundTimesheet = Timesheet.findByIdAndDelete(timesheetId)

  if (!foundTimesheet) {
    throw new NotFoundError(`Timesheet ${timesheetId} not found`)
  }

  return foundTimesheet
}

export default {
  create,
  findAll,
  findById,
  update,
  deleteTimesheet,
}
