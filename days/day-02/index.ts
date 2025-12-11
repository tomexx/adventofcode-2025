import { solvePart1, solvePart2 } from "./main.ts"

const input = Bun.file(`${import.meta.dir}/input.txt`)
const text = await input.text()
const ranges = text.split(",")

console.log("--- Day 02 ---")
const part1Result = solvePart1(ranges)
console.log("Result part 1:", part1Result)

const part2Result = solvePart2(ranges)
console.log("Result part 2:", part2Result)
