import { solvePart1, solvePart2 } from "./main.ts"

const input = Bun.file(`${import.meta.dir}/input.txt`)
const text = await input.text()
const turns = text.split("\n").filter((line) => line.trim() !== "")

console.log("--- Day 01 ---")

const part1Result = solvePart1(turns)
console.log("Result part 1:", part1Result)

const part2Result = solvePart2(turns)
console.log("Result part 2:", part2Result)
