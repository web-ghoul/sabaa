import * as yup from "yup";

export const UsersOptionsSchema = yup.object({
  search: yup.string(),
  sort: yup.string(),
});

export const UsersOptionsInitailValues = {
  search: "",
  sort: "",
};
