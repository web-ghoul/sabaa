import * as yup from "yup";

export const ProsOptionsSchema = yup.object({
  search: yup.string(),
  dobFrom: yup.date(),
  dobTo: yup.date(),
  nationality: yup.string(),
  state: yup.string(),
});

export const ProsOptionsInitailValues = {
  search: "",
  dobFrom: "",
  dobTo: "",
  nationality: "",
  state: "",
};
