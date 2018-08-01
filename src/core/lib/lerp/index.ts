const lerp = (start: number, end: number, percentage: number) => {
  const difference = end - start;

  return start + difference * percentage;
};

export default lerp;
