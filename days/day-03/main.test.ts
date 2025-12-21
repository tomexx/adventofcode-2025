import { describe, expect, it } from "bun:test"
import { getHighestJoltage } from "./main.ts"

describe("Day 02", () => {
  describe("Test highest joltage - part 1", () => {
    it.only("should return highest combination of two digits in order", () => {
      let input: string

      input = "987654321111111"
      expect(getHighestJoltage(input)).toBe(98)

      input = "811111111111119"
      expect(getHighestJoltage(input)).toBe(89)

      input = "234234234234278"
      expect(getHighestJoltage(input)).toBe(78)

      input = "818181911112111"
      expect(getHighestJoltage(input)).toBe(92)

      input =
        "3523254333344533545234435354544433345543433213545453625543425444356254844422654242353541431425424493"
      expect(getHighestJoltage(input)).toBe(93)
    })
  })
})
