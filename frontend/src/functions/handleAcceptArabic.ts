export const handleAcceptArabic = (value: string): string => {
  const Regex = /[\u0600-\u06FF\s]/;
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
