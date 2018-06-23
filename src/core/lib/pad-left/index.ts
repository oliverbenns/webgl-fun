const padLeft = (value: string, padCount: number, char = ' ') => {
  const length = value.length

  const remainder = padCount - length

  if (remainder < 1) {
    return value
  }

  // Apparently Typescript doesn't like the repeat method.
  // and the es6 config isn't working.
  // const pad = char.repeat(remainder)
  let pad = ''

  for (let i = 0; i < remainder; i++) {
    pad += char
  }

  return pad + value
}

export default padLeft
