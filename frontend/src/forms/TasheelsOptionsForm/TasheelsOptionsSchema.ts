import * as yup from "yup";

export const TasheelsOptionsSchema = yup.object({
  search: yup.string(),
  type: yup.string(),
});

export const TasheelsOptionsInitailValues = {
  search: "",
  type: "",
};
