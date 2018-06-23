import padLeft from '.';

describe('padLeft', () => {

  it('pads', () => {
    const result = padLeft('hello', 10)

    expect(result).toBe('     hello')
  })

  it('does not pad when string length >= pad amount', () => {
    const result = padLeft('hello', 3)

    expect(result).toBe('hello')
  })

  it('it pads with a specified character', () => {
    const result = padLeft('hello', 10, '#')

    expect(result).toBe('#####hello')
  })
});
