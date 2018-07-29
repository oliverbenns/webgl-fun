import clamp from '.';

describe('clamp', () => {
  it('clamps by min', () => {
    const result = clamp(1, 2);

    expect(result).toEqual(2);
  });

  it('clamps by max', () => {
    const result = clamp(11, 2, 10);

    expect(result).toEqual(10);
  });

  it('returns original value if bad min/max passed in', () => {
    const result = clamp(11, 10, 5);

    expect(result).toEqual(11);
  });
});
