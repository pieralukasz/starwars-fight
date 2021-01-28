import {
  getNumberFromUrl,
  getRandomId,
  checkIfUnknown,
  getRandomUuid,
} from "../utils/utils";


describe("utils function tests", () => {
  test("getNumberFromUrl", () => {
    const url = "https://swapi.dev/api/people/63/"
    expect(getNumberFromUrl(url)).toBe(63)
  })

  test("checkIfUnknown", () => {
    expect(checkIfUnknown("unknown")).toBe(0)
    expect(checkIfUnknown("Unknown")).toBe(0)
    expect(checkIfUnknown(undefined)).toBe(0)
    expect(checkIfUnknown(5)).toBe(5)
  })

  test("getRandomId", () => {
    expect(getRandomId(undefined)).toBe(1)
    expect(getRandomId([])).toBe(1)
    expect(getRandomId([10])).toBe(10 )
  })

  test("getRandomUuid", () => {
    expect(getRandomUuid().length).toBe('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.length)
    expect(getRandomUuid().split('-').length).toBe(5)
  })
})
