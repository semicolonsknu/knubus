const padZero = (number) => `0${number}`.slice(-2)

export const formatOperation = (date) => {
  const year = date.getFullYear()
  const month = padZero(date.getMonth() + 1)
  const day = padZero(date.getDate())
  return `${year}-${month}-${day}`
}

export const formatHoliday = (date) => {
  const year = date.getFullYear()
  const month = padZero(date.getMonth() + 1)
  return { year, month }
}

export const formatDate = (date) => {
  const weekDays = ['일', '월', '화', '수', '목', '금', '토']
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekDay = weekDays[date.getDay()]

  return `${year}년 ${month}월 ${day}일 (${weekDay})`
}

export const calculateDDay = (targetDate) => {
  const currentDate = new Date()
  const diff = targetDate - currentDate
  const day = Math.ceil(diff / (1000 * 60 * 60 * 24))

  if (day > 0) {
    return `종강 D-${day}`
  } else if (day === 0) {
    return '종강'
  } else {
    return '운행종료'
  }
}
