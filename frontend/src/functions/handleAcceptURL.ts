export const handleAcceptURL = (value: string): string => {
  const regex = /^(ftp|http|https):\/\/[^\s"'\u0600-\u06FF]+$/;
  if (regex.test(value)) {
    return value;
  } else {
    return value.replace(/[\u0600-\u06FF]/g, "");
  }
};
