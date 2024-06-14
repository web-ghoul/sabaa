import * as yup from "yup";

export const NationalitiesOptionsSchema = yup.object({
  search: yup.string(),
  limit: yup.string(),
});

export const NationalitiesOptionsInitailValues = {
  search: "",
  limit: "",
};
