import * as yup from "yup";

export const EChannelsOptionsSchema = yup.object({
  search: yup.string(),
  type: yup.string(),
  gender: yup.string(),
  status: yup.string(),
});

export const EChannelsOptionsInitailValues = {
  search: "",
  type: "",
  gender: "",
  status: "",
};
