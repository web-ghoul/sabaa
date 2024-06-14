import * as yup from "yup";

export const JobsOptionsSchema = yup.object({
  search: yup.string(),
});

export const JobsOptionsInitailValues = {
  search: "",
};
