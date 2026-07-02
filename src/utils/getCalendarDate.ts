import dayjs from 'dayjs'

export const getRelativeDate = (date: dayjs.Dayjs | Date) =>
  dayjs(date).calendar(dayjs(), {
    lastDay: '[Yesterday]',
    lastWeek: 'dddd',
    nextWeek: 'dddd',
    nextDay: '[Tomorrow]',
    sameDay: '[Today]',
    sameElse: 'dddd',
  })
