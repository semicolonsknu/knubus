import { dateApiKey } from '../../data/apiKey'
import { getYearMonth } from '../../utils/dateUtils'

const fetchData = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  return data.response.body.items?.item
}

const buildUrl = (type, year, month, serviceKey) =>
  `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/${type}?solYear=${year}&solMonth=${month}&ServiceKey=${serviceKey}&_type=json`

export const fetchHolidays = async (selectedDate) => {
  const { year, month } = getYearMonth(selectedDate)
  const serviceKey = dateApiKey

  const holidayUrl = buildUrl('getHoliDeInfo', year, month, serviceKey)
  const anniversaryUrl = buildUrl('getAnniversaryInfo', year, month, serviceKey)

  try {
    const [holidays, anniversaries] = await Promise.all([
      fetchData(holidayUrl),
      fetchData(anniversaryUrl),
    ])

    return [
      ...(Array.isArray(holidays) ? holidays : holidays ? [holidays] : []),
      ...(Array.isArray(anniversaries)
        ? anniversaries
        : anniversaries
        ? [anniversaries]
        : []),
    ]
  } catch (error) {
    console.error('Failed to fetch holidays and anniversaries', error)
    throw error
  }
}
