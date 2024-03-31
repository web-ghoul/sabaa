import * as yup from "yup";

export const NationalitiesOptionsSchema = yup.object({
  search: yup.string(),
  sort: yup.string(),
});

export const NationalitiesOptionsInitailValues = {
  search: "",
  sort: "",
};
