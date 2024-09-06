export const handleGetCardTypes = (type: string) => {
  if (type === "pre") {
    return [
      "PRE APPROVAL FOR WORK PERMIT",
      "RELATIVE PRE APPROVAL FOR WORK PERMIT",
      "PART TIME PRE APPROVAL FOR WORK PERMIT",
    ];
  } else if (type === "newLC") {
    return [
      "NEW ELECTRONIC WORK PERMIT",
      "NATIONAL AND GCC ELECTRONIC WORK PERMIT",
      "ELECTRONIC WORK PERMIT FOR PART TIME",
      "NEW ON HUSBAND/FATHER SPONSORSHIP",
    ];
  } else if (type === "") {
    return [
      "RENEW ELECTRONIC WORK PERMIT",
      "RENEWAL NATIONAL AND GCC ELECTRONIC WORK PERMIT",
    ];
  }
  return [];
};
