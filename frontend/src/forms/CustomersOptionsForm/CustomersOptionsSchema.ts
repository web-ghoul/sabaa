import * as yup from "yup";

export const CustomersOptionsSchema = yup.object({
  search: yup.string(),
  dobFrom: yup.date(),
  dobTo: yup.date(),
  nationality: yup.string(),
  state: yup.string(),
});

export const CustomersOptionsInitailValues = {
  search: "",
  dobFrom: "",
  dobTo: "",
  nationality: "",
  state: "",
};
