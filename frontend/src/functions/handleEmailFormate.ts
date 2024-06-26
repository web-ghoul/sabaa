export const handleEmailFormate = (value: string): string => {
  const Regex = /^/;
  const len = value.length;
  if (len > 0) {
    if (Regex.test(value)) {
      return value;
    } else {
      return value.slice(0, len - 1);
    }
  }
  return "";
};
