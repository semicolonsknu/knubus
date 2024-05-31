export const parseTime = (stopTime) => {
  const [hours, minutes] = stopTime.split(':').map(Number)
  return { hours, minutes }
}

export const isPast = (stopTime) => {
  const currentTime = new Date()
  const { hours, minutes } = parseTime(stopTime)
  const stopDate = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    hours,
    minutes
  )
  return currentTime > stopDate
}

export const isCurrent = (stopTime, nextTime) => {
  const currentTime = new Date()
  const { hours, minutes } = parseTime(stopTime)
  const stopDate = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    hours,
    minutes
  )
  if (!nextTime) {
    return (
      currentTime >= stopDate &&
      currentTime < new Date(stopDate.getTime() + 60000)
    )
  } else {
    const { hours: nextHours, minutes: nextMinutes } = parseTime(nextTime)
    const nextStopDate = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate(),
      nextHours,
      nextMinutes
    )
    return currentTime >= stopDate && currentTime < nextStopDate
  }
}

export const getCurrentIndex = (currentTime, KNUBus_Timetable) => {
  const currentHour = currentTime.getHours()
  const currentMinute = currentTime.getMinutes()

  for (let i = 0; i < KNUBus_Timetable.timetable.length; i++) {
    const { tables } = KNUBus_Timetable.timetable[i]

    const startHour = parseInt(tables['운행예정'].split(':')[0])
    const startMinute = parseInt(tables['운행예정'].split(':')[1])

    const endHour = parseInt(tables['운행종료 [미래도서관]'].split(':')[0])
    const endMinute = parseInt(tables['운행종료 [미래도서관]'].split(':')[1])

    if (
      (currentHour > startHour ||
        (currentHour === startHour && currentMinute >= startMinute)) &&
      (currentHour < endHour ||
        (currentHour === endHour && currentMinute <= endMinute))
    ) {
      return i
    }
  }
  return -1
}
