const clamp = (value: number, min?: number, max?: number) => {
  if (min > max) {
    return value;
  }

  let clampedValue = value;

  if (min !== undefined) {
    clampedValue = Math.max(value, min);
  }

  if (max !== undefined) {
    clampedValue = Math.min(value, max);
  }

  return clampedValue;
};

export default clamp
