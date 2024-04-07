import * as yup from "yup";

export const UsersOptionsSchema = yup.object({
  search: yup.string(),
  role: yup.string(),
  status: yup.string(),
});

export const UsersOptionsInitailValues = {
  search: "",
  role: "",
  status: "",
};
