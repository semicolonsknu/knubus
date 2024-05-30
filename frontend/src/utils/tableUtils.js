export const calculateWidth = (timetable) => {
  if (!Array.isArray(timetable) || !timetable.length) {
    return []
  }

  const widths = timetable[0]
    ? Object.keys(timetable[0].tables).map(() => 0)
    : []

  timetable.forEach((row) => {
    if (row?.tables) {
      ;[row.round, ...Object.values(row.tables)].forEach((cell, index) => {
        const cellWidth = cell.toString().length * 14
        if (cellWidth > (widths[index] || 0)) {
          widths[index] = cellWidth
        }
      })
    }
  })

  return widths
}

export const calculateTotalWidth = (widthArr) => {
  return widthArr.reduce((acc, width) => acc + width, 0)
}

export const calculateHeight = (timetable) => {
  if (!Array.isArray(timetable) || !timetable.length) {
    return []
  }

  const defaultRowHeight = 50
  const headerHeight = 30

  return timetable.map(() => defaultRowHeight + headerHeight)
}

export const calculateTotalHeight = (heightArr) => {
  return heightArr.reduce((acc, height) => acc + height, 0)
}

export const getTableHeader = (timetable) => {
  if (!timetable?.length) {
    return []
  }
  return ['구분', ...Object.keys(timetable[0].tables)]
}
