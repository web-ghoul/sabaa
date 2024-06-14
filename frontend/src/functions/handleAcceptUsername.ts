export const handleAcceptUsername = (value: string): string => {
  const regex = /^[a-zA-Z0-9]*$/;
  if (regex.test(value)) {
    return value;
  } else {
    return value.replace(/[^a-zA-Z0-9]/g, "");
  }
};
