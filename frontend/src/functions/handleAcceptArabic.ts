export const handleAcceptArabic = (value: string): string => {
  if (!value) {
    return "";
  }
  const val = value[value.length - 1].charCodeAt(0);
  if ((val >= 1536 && val <= 1791) || val === 32) {
    return value;
  } else {
    return value.slice(0, value.length - 1);
  }
};
