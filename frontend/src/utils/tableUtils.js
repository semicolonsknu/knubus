export const calculateTotalWidth = (widthArr) => {
  return widthArr.reduce((acc, cur) => acc + cur, 0)
}
