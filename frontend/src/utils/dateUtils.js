// 한 자리 숫자 앞에 0을 추가
const padZero = (number) => `0${number}`.slice(-2)

// 날짜를 'YYYY-MM-DD' 형식으로 포맷
export const formatYMD = (date) => {
  const year = date.getFullYear()
  const month = padZero(date.getMonth() + 1)
  const day = padZero(date.getDate())
  return `${year}-${month}-${day}`
}

// 연도와 월을 객체로 반환
export const getYearMonth = (date) => {
  const year = date.getFullYear()
  const month = padZero(date.getMonth() + 1)
  return { year, month }
}

// 날짜를 'YYYY년 MM월 DD일 (요일)' 형식으로 포맷
export const formatFullDate = (date) => {
  const weekDays = ['일', '월', '화', '수', '목', '금', '토']
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekDay = weekDays[date.getDay()]

  return `${year}년 ${month}월 ${day}일 (${weekDay})`
}

// 목표 날짜까지 남은 일수를 계산하고 메시지 반환
export const getDay = (targetDate) => {
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
