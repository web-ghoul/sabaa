export const handleDate = (isoDateString: Date): string => {
  const date = new Date(isoDateString);
  const options: object = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("ar", options);
};
