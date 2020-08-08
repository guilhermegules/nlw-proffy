import { Response, Request } from 'express'

import { ScheduleItem } from './../interface/schedule-item.interface'
import { convertHourToMinutes } from '../utils/converter'

import db from '../database/connection'

export default class ClassesController {
  async index(request: Request, response: Response) {
    const filters = request.query

    const subject = filters.subject as string
    const weekDay = filters.weekDay as string
    const time = filters.time as string

    if (!subject || !weekDay || !time) {
      return response.status(400).json({
        error: 'Missing filters to search classes'
      })
    }

    const timeInMinutes = convertHourToMinutes(time)

    const classes = await db('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`classId` = `classes`.`id`')
          .whereRaw('`class_schedule`.`weekDay` = ??', [Number(weekDay)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.userId', '=', 'users.id')
      .select(['classes.*', 'users.*'])

    return response.json(classes)
  }

  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = request.body

    const trx = await db.transaction()

    try {
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio
      })

      const userId = insertedUsersIds[0]

      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        userId
      })

      const classId = insertedClassesIds[0]

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          classId,
          weekDay: scheduleItem.weekDay,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to)
        }
      })

      await trx('class_schedule').insert(classSchedule)

      await trx.commit()

      return response.status(201).send()
    } catch (error) {
      await trx.rollback()

      return response.status(400).json({
        error: 'Unexpected error while creating a new class '
      })
    }
  }
}
