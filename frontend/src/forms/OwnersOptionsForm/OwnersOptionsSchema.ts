import * as yup from "yup";

export const OwnersOptionsSchema = yup.object({
  search: yup.string(),
  limit: yup.string(),
  filterByDateofBirth: yup.date(),
  filterByNationality: yup.string(),
});

export const OwnersOptionsInitailValues = {
  search: "",
  limit: "",
  filterByDateofBirth: "",
  filterByNationality: "",
};
