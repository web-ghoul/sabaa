export const handleGetNextCardType = (cType: string) => {
  const cardType = cType;
  let nextCardType = cType;
  if (cardType === "PRE APPROVAL FOR WORK PERMIT") {
    nextCardType = "NEW ELECTRONIC WORK PERMIT";
  } else if (cardType === "NEW ELECTRONIC WORK PERMIT") {
    nextCardType = "RENEW ELECTRONIC WORK PERMIT";
  } else if (cardType === "RELATIVE PRE APPROVAL FOR WORK PERMIT") {
    nextCardType = "NEW ON HUSBAND/FATHER SPONSORSHIP";
  } else if (cardType === "PART TIME PRE APPROVAL FOR WORK PERMIT") {
    nextCardType = "ELECTRONIC WORK PERMIT FOR PART TIME";
  } else if (cardType === "NATIONAL AND GCC ELECTRONIC WORK PERMIT") {
    nextCardType = "RENEWAL NATIONAL AND GCC ELECTRONIC WORK PERMIT";
  }
  return nextCardType;
};
