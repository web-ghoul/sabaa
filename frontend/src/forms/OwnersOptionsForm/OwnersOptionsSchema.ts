import * as yup from "yup";

export const OwnersOptionsSchema = yup.object({
  search: yup.string(),
  sort: yup.string(),
});

export const OwnersOptionsInitailValues = {
  search: "",
  sort: "",
};
