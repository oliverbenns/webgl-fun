const padLeft = (value: string, padCount: number, char = ' ') => {
  const length = value.length

  const remainder = padCount - length

  if (remainder < 1) {
    return value
  }

  const pad = char.repeat(remainder)

  return pad + value
}

export default padLeft
