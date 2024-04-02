import * as yup from "yup";

export const OwnersOptionsSchema = yup.object({
  search: yup.string(),
  limit: yup.string(),
  filterByDateOfBirth: yup.date(),
  filterByNationality: yup.string(),
  filterByState: yup.string(),
});

export const OwnersOptionsInitailValues = {
  search: "",
  limit: "",
  filterByDateOfBirth: "",
  filterByNationality: "",
  filterByState: "",
};
