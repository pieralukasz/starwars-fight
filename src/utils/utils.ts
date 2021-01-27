export const getNumberFromUrl = (url: string): number => {
  return parseInt(url.split('/')[5])
}
