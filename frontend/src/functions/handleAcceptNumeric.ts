export const handleAcceptNumeric = (value: string): string => {
  const regex = /^[0-9]*$/;
  if (regex.test(value)) {
    return value;
  } else {
    return value.replace(/[^0-9]/g, "");
  }
};
