// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const shuffleArray = (arr: any[]) => {
  return arr.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};
