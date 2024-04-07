export const handleDate = (date: Date | string): string => {
  let parsedDate: Date;
  if (!date) {
    return "";
  }
  if (typeof date === "string") {
    parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return "";
    }
  } else {
    parsedDate = date;
  }
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = parsedDate.toLocaleString("en-US", options);
  const [month, day, year] = formattedDate.split("/");
  return `${day}/${month}/${year}`;
};
