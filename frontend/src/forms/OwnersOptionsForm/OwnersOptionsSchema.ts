import * as yup from "yup";

export const OwnersOptionsSchema = yup.object({
  search: yup.string(),
  dobFrom: yup.date(),
  dobTo: yup.date(),
  nationality: yup.string(),
  state: yup.string(),
});

export const OwnersOptionsInitailValues = {
  search: "",
  dobFrom: "",
  dobTo: "",
  nationality: "",
  state: "",
};
