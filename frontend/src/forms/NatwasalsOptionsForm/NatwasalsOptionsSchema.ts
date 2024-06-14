import * as yup from "yup";

export const NatwasalsOptionsSchema = yup.object({
  search: yup.string(),
  type: yup.string(),
});

export const NatwasalsOptionsInitailValues = {
  search: "",
  type: "",
};
