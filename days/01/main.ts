// Types
export type DialState = {
  position: number
}

export type RotationResult = {
  state: DialState
  zeroCrossings: number
}

// Constants
export const DIAL_SIZE = 100

// Functions
export const createDial = (initialPosition: number = 0): DialState => ({
  position: initialPosition,
})

export const rotateRight = ({
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

export const rotateLeft = ({
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

export const parseTurn = (
  turn: string,
): { direction: "R" | "L"; steps: number } => {
  const direction = turn[0] as "R" | "L"
  const steps = parseInt(turn.slice(1), 10)
  return { direction, steps }
}

export const solvePart1 = (
  turns: string[],
  initialPosition: number = 50,
): number => {
  let dial = createDial(initialPosition)
  let zeroPositionCount = 0

  for (const turn of turns) {
    const { direction, steps } = parseTurn(turn)
    const result =
      direction === "R"
        ? rotateRight({ state: dial, steps })
        : rotateLeft({ state: dial, steps })
    dial = result.state
    if (dial.position === 0) {
      zeroPositionCount++
    }
  }

  return zeroPositionCount
}

export const solvePart2 = (
  turns: string[],
  initialPosition: number = 50,
): number => {
  let dial = createDial(initialPosition)
  let zeroCrossings = 0

  for (const turn of turns) {
    const { direction, steps } = parseTurn(turn)
    const result =
      direction === "R"
        ? rotateRight({ state: dial, steps })
        : rotateLeft({ state: dial, steps })
    dial = result.state
    zeroCrossings += result.zeroCrossings
  }

  return zeroCrossings
}
