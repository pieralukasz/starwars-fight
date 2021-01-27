export const getNumberFromUrl = (url: string): number => {
  return parseInt(url.split('/')[5])
}


export const getRandomId = (table: number[] | [] | undefined): number => {
  if (table) {
    return table[Math.floor(Math.random() * table.length)]
  }
  return 1
}


export const checkIfUnknown = (points: string | number | undefined): number => {
  if (points === 'Unknown' || points === 'unknown' || points === undefined) {
    return 0
  }
  return parseFloat(points.toString())
}
