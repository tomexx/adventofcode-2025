const input = Bun.file(`${import.meta.dir}/input.txt`)
const text = await input.text()
const turns = text.split("\n")

console.log("--- Day 01 ---")

type DialState = {
  position: number
}

type RotationResult = {
  state: DialState
  zeroCrossings: number
}

const createDial = (initialPosition: number = 0): DialState => ({
  position: initialPosition,
})

const DIAL_SIZE = 100

const rotateRight = ({
  state,
  steps,
  dialSize = DIAL_SIZE,
}: {
  state: DialState
  steps: number
  dialSize?: number
}): RotationResult => {
  const zeroCrossings = Math.floor((state.position + steps) / dialSize)
  return {
    state: { position: (state.position + steps) % dialSize },
    zeroCrossings,
  }
}

const rotateLeft = ({
  state,
  steps,
  dialSize = DIAL_SIZE,
}: {
  state: DialState
  steps: number
  dialSize?: number
}): RotationResult => {
  let zeroCrossings: number
  if (state.position === 0) {
    zeroCrossings = Math.floor(steps / dialSize)
  } else if (steps >= state.position) {
    zeroCrossings = 1 + Math.floor((steps - state.position) / dialSize)
  } else {
    zeroCrossings = 0
  }
  return {
    state: {
      position: (((state.position - steps) % dialSize) + dialSize) % dialSize,
    },
    zeroCrossings,
  }
}

let dial: DialState
let zeroPositionCount: number = 0
let zeroCrossings: number = 0

dial = createDial(50)
for (const turn of turns) {
  const direciton = turn[0]
  const steps = parseInt(turn.slice(1), 10)
  const result =
    direciton === "R"
      ? rotateRight({ state: dial, steps })
      : rotateLeft({ state: dial, steps })
  dial = result.state
  if (dial.position === 0) {
    zeroPositionCount++
  }
}

console.log("Result part 1:", zeroPositionCount)

dial = createDial(50)
for (const turn of turns) {
  const direciton = turn[0]
  const steps = parseInt(turn.slice(1), 10)
  const result =
    direciton === "R"
      ? rotateRight({ state: dial, steps })
      : rotateLeft({ state: dial, steps })
  dial = result.state
  zeroCrossings += result.zeroCrossings
}

console.log("Result part 2:", zeroCrossings)
