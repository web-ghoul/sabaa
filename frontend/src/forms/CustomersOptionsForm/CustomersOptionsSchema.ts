import * as yup from "yup";

export const CustomersOptionsSchema = yup.object({
  search: yup.string(),
  dobFrom: yup.date(),
  dobTo: yup.date(),
  residenceFrom: yup.date(),
  residenceTo: yup.date(),
  status: yup.string(),
  nationality: yup.string(),
  state: yup.string(),
});

export const CustomersOptionsInitailValues = {
  search: "",
  dobFrom: "",
  dobTo: "",
  residenceTo: "",
  residenceFrom: "",
  status: "",
  nationality: "",
  state: "",
};
