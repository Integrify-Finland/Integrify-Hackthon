import express from 'express'

import {
  createTimesheet,
  findAllTimesheets,
  findTimesheetById,
  updateTimesheetById,
  deleteTimesheetById,
} from '../controllers/timesheet'

const router = express.Router()

// Every path we define here will get/api/v1/users prefix
router.post('/', createTimesheet)
router.get('/', findAllTimesheets)
router.get('/:timesheetId', findTimesheetById)
router.put('/:timesheetId', updateTimesheetById)
router.delete('/:timesheetId', deleteTimesheetById)

export default router
