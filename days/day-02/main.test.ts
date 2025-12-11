import { describe, expect, it } from "bun:test"
import { getInvalidIDsFromRange, isValidID } from "./main.ts"

describe("Day 02", () => {
  describe("Test validity of IDs", () => {
    it("should return true if the ID is valid", () => {
      expect(isValidID(11)).toBe(false)
      expect(isValidID(22)).toBe(false)
      expect(isValidID(1010)).toBe(false)
      expect(isValidID(1)).toBe(true)
      expect(isValidID(101)).toBe(true)
      expect(isValidID(101100)).toBe(true)
      expect(isValidID(101101)).toBe(false)
    })
  })
  describe("Test ranges", () => {
    it("should get invalid IDs", () => {
      let input: string

      input = "11-22"
      expect(getInvalidIDsFromRange(input)).toEqual([11, 22])

      input = "95-115"
      expect(getInvalidIDsFromRange(input)).toEqual([99])

      input = "998-1012"
      expect(getInvalidIDsFromRange(input)).toEqual([1010])

      input = "1188511880-1188511890"
      expect(getInvalidIDsFromRange(input)).toEqual([1188511885])

      input = "222220-222224"
      expect(getInvalidIDsFromRange(input)).toEqual([222222])

      input = "1698522-1698528"
      expect(getInvalidIDsFromRange(input)).toEqual([])

      input = "446443-446449"
      expect(getInvalidIDsFromRange(input)).toEqual([446446])

      input = "38593856-38593862"
      expect(getInvalidIDsFromRange(input)).toEqual([38593859])

      input = "565653-565659"
      expect(getInvalidIDsFromRange(input)).toEqual([])

      input = "824824821-824824827"
      expect(getInvalidIDsFromRange(input)).toEqual([])

      input = "2121212118-2121212124"
      expect(getInvalidIDsFromRange(input)).toEqual([])
    })
  })
})
