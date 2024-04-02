export const handleDate = (isoDateString: Date): string => {
  if (isoDateString && new Date(isoDateString)) {
    const date = new Date(isoDateString);
    const options: object = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("ar", options);
  }
  return "";
};
