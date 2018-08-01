import lerp from '.';

describe('lerp', () => {
  it('returns correct result', () => {
    const result = lerp(30, 60, 0.5);

    expect(result).toBe(45);
  })

  it('returns start position result when percentage is zero', () => {
    const result = lerp(0, 1, 0);

    expect(result).toBe(0);
  })

  it('returns correct result when percentage is negative', () => {
    const result = lerp(30, 60, -0.5);

    expect(result).toBe(15);
  })
});
