import { describe, expect, it } from "bun:test"
import {
  createDial,
  parseTurn,
  rotateLeft,
  rotateRight,
  solvePart1,
  solvePart2,
} from "./main.ts"

describe("Day 01", () => {
  describe("createDial", () => {
    it("should create a dial with default position 0", () => {
      const dial = createDial()
      expect(dial.position).toBe(0)
    })

    it("should create a dial with specified initial position", () => {
      const dial = createDial(50)
      expect(dial.position).toBe(50)
    })
  })

  describe("rotateRight", () => {
    it("should rotate right within dial size", () => {
      const dial = createDial(10)
      const result = rotateRight({ state: dial, steps: 20 })
      expect(result.state.position).toBe(30)
      expect(result.zeroCrossings).toBe(0)
    })

    it("should wrap around when exceeding dial size", () => {
      const dial = createDial(80)
      const result = rotateRight({ state: dial, steps: 30 })
      expect(result.state.position).toBe(10)
      expect(result.zeroCrossings).toBe(1)
    })

    it("should count multiple zero crossings", () => {
      const dial = createDial(50)
      const result = rotateRight({ state: dial, steps: 250 })
      expect(result.state.position).toBe(0)
      expect(result.zeroCrossings).toBe(3)
    })

    it("should work with custom dial size", () => {
      const dial = createDial(5)
      const result = rotateRight({ state: dial, steps: 10, dialSize: 10 })
      expect(result.state.position).toBe(5)
      expect(result.zeroCrossings).toBe(1)
    })
  })

  describe("rotateLeft", () => {
    it("should rotate left within dial size", () => {
      const dial = createDial(50)
      const result = rotateLeft({ state: dial, steps: 20 })
      expect(result.state.position).toBe(30)
      expect(result.zeroCrossings).toBe(0)
    })

    it("should wrap around when going below 0", () => {
      const dial = createDial(20)
      const result = rotateLeft({ state: dial, steps: 30 })
      expect(result.state.position).toBe(90)
      // When steps >= position, we cross zero once
      expect(result.zeroCrossings).toBe(1)
    })

    it("should count zero crossing when starting at 0", () => {
      const dial = createDial(0)
      const result = rotateLeft({ state: dial, steps: 50 })
      expect(result.state.position).toBe(50)
      expect(result.zeroCrossings).toBe(0)
    })

    it("should count zero crossing when crossing from positive position", () => {
      const dial = createDial(30)
      const result = rotateLeft({ state: dial, steps: 50 })
      expect(result.state.position).toBe(80)
      expect(result.zeroCrossings).toBe(1)
    })

    it("should count multiple zero crossings", () => {
      const dial = createDial(30)
      const result = rotateLeft({ state: dial, steps: 250 })
      expect(result.state.position).toBe(80)
      // Starting at 30, rotating left 250: crosses zero at 30, then every 100 steps
      // 1 (initial crossing) + Math.floor((250-30)/100) = 1 + 2 = 3
      expect(result.zeroCrossings).toBe(3)
    })

    it("should work with custom dial size", () => {
      const dial = createDial(5)
      const result = rotateLeft({ state: dial, steps: 10, dialSize: 10 })
      expect(result.state.position).toBe(5)
      expect(result.zeroCrossings).toBe(1)
    })
  })

  describe("parseTurn", () => {
    it("should parse right turn correctly", () => {
      const result = parseTurn("R50")
      expect(result.direction).toBe("R")
      expect(result.steps).toBe(50)
    })

    it("should parse left turn correctly", () => {
      const result = parseTurn("L25")
      expect(result.direction).toBe("L")
      expect(result.steps).toBe(25)
    })

    it("should parse multi-digit steps", () => {
      const result = parseTurn("R123")
      expect(result.direction).toBe("R")
      expect(result.steps).toBe(123)
    })
  })

  describe("solvePart1", () => {
    it("should count positions at zero", () => {
      const turns = ["R50", "L50", "R50"]
      const result = solvePart1(turns, 0)
      // Starting at 0, R50 -> 50, L50 -> 0 (count++), R50 -> 50
      expect(result).toBe(1)
    })

    it("should handle multiple zero positions", () => {
      const turns = ["R100", "L100", "R100"]
      const result = solvePart1(turns, 0)
      // Starting at 0, R100 -> 0 (count++), L100 -> 0 (count++), R100 -> 0 (count++)
      expect(result).toBe(3)
    })

    it("should work with initial position", () => {
      const turns = ["L50"]
      const result = solvePart1(turns, 50)
      // Starting at 50, L50 -> 0 (count++)
      expect(result).toBe(1)
    })
  })

  describe("solvePart2", () => {
    it("should count zero crossings", () => {
      const turns = ["R150"]
      const result = solvePart2(turns, 0)
      // Starting at 0, R150 crosses zero once (0 -> 50)
      expect(result).toBe(1)
    })

    it("should accumulate zero crossings across multiple turns", () => {
      const turns = ["R150", "R100"]
      const result = solvePart2(turns, 0)
      // Starting at 0, R150: position 50, 1 crossing (0->50)
      // Then at 50, R100: position 50, 1 crossing (50->50 wraps)
      expect(result).toBe(2)
    })

    it("should work with left rotations", () => {
      const turns = ["L50"]
      const result = solvePart2(turns, 50)
      // Starting at 50, L50 -> 0, should have 1 crossing
      expect(result).toBe(1)
    })
  })
})
