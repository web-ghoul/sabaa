import * as yup from "yup";

export const CustomersOptionsSchema = yup.object({
  search: yup.string(),
  nationality: yup.string(),
  gender: yup.string(),
  cardType: yup.string(),
  status: yup.string(),
});

export const CustomersOptionsInitailValues = {
  search: "",
  nationality: "",
  gender: "",
  cardType: "",
  status: "",
};
