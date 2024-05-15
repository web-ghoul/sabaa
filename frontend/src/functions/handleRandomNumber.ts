export const handleRandomNumber = (min: number = 5, max: number = 10) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
