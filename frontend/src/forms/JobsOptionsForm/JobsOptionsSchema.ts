import * as yup from "yup";

export const JobsOptionsSchema = yup.object({
  search: yup.string(),
  sort: yup.string(),
});

export const JobsOptionsInitailValues = {
  search: "",
  sort: "",
};
