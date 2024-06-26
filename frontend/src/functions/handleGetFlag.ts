import countries from "../data/countries.json";

export const handleGetFlag = (nationality: string) => {
  if (nationality) {
    const data = countries.data;
    for (let i = 0; i < data.length; i++) {
      if (data[i].label.toLowerCase() === nationality.toLowerCase()) {
        return `https://flagcdn.com/w20/${data[i].code.toLowerCase()}.png`;
      }
    }
  }
  return "";
};
