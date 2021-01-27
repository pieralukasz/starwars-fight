export const getNumberFromUrl = (url: string): number => {
  return parseInt(url.split('/')[5])
}


export const getRandomId = (table: number[] | [] | undefined): number => {
  if (table) {
    const number = table[Math.floor(Math.random() * table.length)]
    console.log(number)

    return number

  }
  console.log(table)
  return 1

}
