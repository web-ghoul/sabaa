import * as yup from "yup";

export const CompaniesOptionsSchema = yup.object({
  search: yup.string(),
  sort: yup.string(),
});

export const CompaniesOptionsInitailValues = {
  search: "",
  sort: "",
};
