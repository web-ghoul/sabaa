import * as yup from "yup";

export const UsersOptionsSchema = yup.object({
  search: yup.string(),
  limit: yup.string(),
  filterByRole: yup.string(),
  filterByStatus: yup.string(),
});

export const UsersOptionsInitailValues = {
  search: "",
  filterByRole: "",
  limit: "",
  filterByStatus: "",
};
