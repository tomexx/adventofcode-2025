import { describe, expect, it } from "bun:test"
import {
  getInvalidIDsFromRangePart1,
  getInvalidIDsFromRangePart2,
  isValidIDPart1,
  isValidIDPart2,
} from "./main.ts"

describe("Day 02", () => {
  describe("Test validity of IDs - part 1", () => {
    it("should return true if the ID is valid", () => {
      expect(isValidIDPart1(11)).toBe(false)
      expect(isValidIDPart1(22)).toBe(false)
      expect(isValidIDPart1(1010)).toBe(false)
      expect(isValidIDPart1(1)).toBe(true)
      expect(isValidIDPart1(101)).toBe(true)
      expect(isValidIDPart1(101100)).toBe(true)
      expect(isValidIDPart1(101101)).toBe(false)
    })
  })
  describe("Test ranges - part 1", () => {
    it("should get invalid IDs", () => {
      let input: string

      input = "11-22"
      expect(getInvalidIDsFromRangePart1(input)).toEqual([11, 22])

      input = "95-115"
      expect(getInvalidIDsFromRangePart1(input)).toEqual([99])

      input = "998-1012"
      expect(getInvalidIDsFromRangePart1(input)).toEqual([1010])

      input = "1188511880-1188511890"
      expect(getInvalidIDsFromRangePart1(input)).toEqual([1188511885])

      input = "222220-222224"
      expect(getInvalidIDsFromRangePart1(input)).toEqual([222222])

      input = "1698522-1698528"
      expect(getInvalidIDsFromRangePart1(input)).toEqual([])

      input = "446443-446449"
      expect(getInvalidIDsFromRangePart1(input)).toEqual([446446])

      input = "38593856-38593862"
      expect(getInvalidIDsFromRangePart1(input)).toEqual([38593859])

      input = "565653-565659"
      expect(getInvalidIDsFromRangePart1(input)).toEqual([])

      input = "824824821-824824827"
      expect(getInvalidIDsFromRangePart1(input)).toEqual([])

      input = "2121212118-2121212124"
      expect(getInvalidIDsFromRangePart1(input)).toEqual([])
    })
  })
  describe("Test validity of IDs - part 2", () => {
    it("should return true if the ID is valid", () => {
      expect(isValidIDPart2(11)).toBe(false)
      expect(isValidIDPart2(22)).toBe(false)
      expect(isValidIDPart2(1010)).toBe(false)
      expect(isValidIDPart2(1)).toBe(true)
      expect(isValidIDPart2(101)).toBe(true)
      expect(isValidIDPart2(101100)).toBe(true)
      expect(isValidIDPart2(101101)).toBe(false)
      expect(isValidIDPart2(12341234)).toBe(false)
      expect(isValidIDPart2(123123123)).toBe(false)
      expect(isValidIDPart2(1212121212)).toBe(false)
      expect(isValidIDPart2(1111111)).toBe(false)
    })
  })
  describe("Test ranges - part 2", () => {
    it("should get invalid IDs", () => {
      let input: string

      input = "11-22"
      expect(getInvalidIDsFromRangePart2(input)).toEqual([11, 22])

      input = "95-115"
      expect(getInvalidIDsFromRangePart2(input)).toEqual([99, 111])

      input = "998-1012"
      expect(getInvalidIDsFromRangePart2(input)).toEqual([999, 1010])

      input = "1188511880-1188511890"
      expect(getInvalidIDsFromRangePart2(input)).toEqual([1188511885])

      input = "222220-222224"
      expect(getInvalidIDsFromRangePart2(input)).toEqual([222222])

      input = "1698522-1698528"
      expect(getInvalidIDsFromRangePart2(input)).toEqual([])

      input = "446443-446449"
      expect(getInvalidIDsFromRangePart2(input)).toEqual([446446])

      input = "38593856-38593862"
      expect(getInvalidIDsFromRangePart2(input)).toEqual([38593859])

      input = "565653-565659"
      expect(getInvalidIDsFromRangePart2(input)).toEqual([565656])

      input = "824824821-824824827"
      expect(getInvalidIDsFromRangePart2(input)).toEqual([824824824])

      input = "2121212118-2121212124"
      expect(getInvalidIDsFromRangePart2(input)).toEqual([2121212121])
    })
  })
})
