// stationsUtils.js
export const stationsUtils = (stationsData, imageMap) =>
  stationsData.station.map((location) => ({
    ...location,
    image: imageMap[location.image],
  }))
