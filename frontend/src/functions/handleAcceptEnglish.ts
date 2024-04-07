export const handleAcceptEnglish = (value: string): string => {
  const regex = /^[a-zA-Z]*$/;
  if (regex.test(value)) {
    return value;
  } else {
    return value.replace(/[^a-zA-Z]/g, "");
  }
};
