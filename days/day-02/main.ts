export const isValidIDPart1 = (id: number): boolean => {
  const idAsString = id.toString()
  if (idAsString.length % 2 === 1) {
    return true
  }
  const firstHalf = idAsString.slice(0, idAsString.length / 2)
  const secondHalf = idAsString.slice(idAsString.length / 2)

  return firstHalf !== secondHalf
}

export const getInvalidIDsFromRangePart1 = (range: string): number[] => {
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
    if (!isValidIDPart1(i)) {
      result.push(i)
    }
  }
  return result
}

export const solvePart1 = (ranges: string[]): number => {
  let result = 0
  for (const range of ranges) {
    const invalidIDs = getInvalidIDsFromRangePart1(range)
    result += invalidIDs.reduce((sum, id) => sum + id, 0)
  }
  return result
}

export const isValidIDPart2 = (id: number): boolean => {
  const idAsArray = id.toString().split("")
  for (let i = 2; i <= idAsArray.length; i++) {
    if (idAsArray.length % i !== 0) {
      continue
    }
    const partSize = idAsArray.length / i
    const chunks: string[][] = []
    for (let j = 0; j < idAsArray.length; j += partSize) {
      chunks.push(idAsArray.slice(j, j + partSize))
    }
    // Check if all chunks are equal
    const firstChunk = chunks[0]?.join("")
    if (chunks.every((chunk) => chunk.join("") === firstChunk)) {
      return false
    }
  }
  return true
}

export const getInvalidIDsFromRangePart2 = (range: string): number[] => {
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
    if (!isValidIDPart2(i)) {
      result.push(i)
    }
  }
  return result
}

export const solvePart2 = (ranges: string[]): number => {
  let result = 0
  for (const range of ranges) {
    const invalidIDs = getInvalidIDsFromRangePart2(range)
    result += invalidIDs.reduce((sum, id) => sum + id, 0)
  }
  return result
}
