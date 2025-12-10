export const isValidID = (id: number): boolean => {
  const idAsString = id.toString()
  if (idAsString.length % 2 === 1) {
    return true
  }
  const firstHalf = idAsString.slice(0, idAsString.length / 2)
  const secondHalf = idAsString.slice(idAsString.length / 2)

  return firstHalf !== secondHalf
}

export const getInvalidIDsFromRange = (range: string): number[] => {
  const result: number[] = []
  const parts = range.split("-")
  if (parts.length !== 2) {
    return [] // Skip invalid ranges
  }
  const rangeStart = Number(parts[0])
  const rangeEnd = Number(parts[1])
  if (Number.isNaN(rangeStart) || Number.isNaN(rangeEnd)) {
    return [] // Skip ranges with invalid numbers
  }
  for (let i = rangeStart; i <= rangeEnd; i++) {
    if (!isValidID(i)) {
      result.push(i)
    }
  }
  return result
}

export const solvePart1 = (ranges: string[]): number => {
  let result = 0
  for (const range of ranges) {
    const invalidIDs = getInvalidIDsFromRange(range)
    result += invalidIDs.reduce((sum, id) => sum + id, 0)
  }
  return result
}
