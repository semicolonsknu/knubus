export const formatOperation = (date) => {
  const year = date.getFullYear()
  const month = `0${date.getMonth() + 1}`.slice(-2)
  const day = `0${date.getDate()}`.slice(-2)
  return `${year}-${month}-${day}`
}

export const formatHoliday = (date) => {
  const year = date.getFullYear()
  const month = `0${date.getMonth() + 1}`.slice(-2)
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
