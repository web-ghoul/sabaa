<<<<<<< HEAD
export const handleDateForInput = (dateString: Date | undefined): string => {
  if (dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  return "";
=======
export const handleDateForInput = (dateString: Date): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
};
