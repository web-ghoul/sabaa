export const handleAcceptEnglish = (value: string): string => {
  const Regex = /^[a-zA-Z]+$/;
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
