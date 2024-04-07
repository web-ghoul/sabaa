export const handleAcceptArabic = (value: string): string => {
  const regex = /^[\u0600-\u06FF\s]*$/;
  if (regex.test(value)) {
    return value;
  } else {
    return value.replace(/[^\u0600-\u06FF\s]/g, "");
  }
};
