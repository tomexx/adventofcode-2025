import { solvePart1 } from "./main.ts"

const input = Bun.file(`${import.meta.dir}/input.txt`)
const text = await input.text()
const lines = text.split("\n").filter((line) => line.trim() !== "")

console.log("--- Day 03 ---")
const part1Result = solvePart1(lines)
console.log("Result part 1:", part1Result)
