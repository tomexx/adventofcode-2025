export const getHighestJoltage = (line: string): number => {
  const digits = line.split("").map(Number)

  const largestDigit = Math.max(...digits)
  const largestDigitIndex = digits.indexOf(largestDigit)

  let tempArray: number[]
  let secondDigit: number

  if (largestDigitIndex < digits.length - 1) {
    tempArray = digits.slice(largestDigitIndex + 1, digits.length)
    secondDigit = Math.max(...tempArray)
    return Number(`${largestDigit}${secondDigit}`)
  } else {
    tempArray = digits.slice(0, largestDigitIndex)
    secondDigit = Math.max(...tempArray)
    return Number(`${secondDigit}${largestDigit}`)
  }
}

export const solvePart1 = (lines: string[]): number => {
  let result = 0
  for (const line of lines) {
    const highestJoltage = getHighestJoltage(line)
    result += highestJoltage
  }
  return result
}
