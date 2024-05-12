import * as yup from "yup";

export const EmployeesOptionsSchema = yup.object({
  search: yup.string(),
  nationality: yup.string(),
  gender: yup.string(),
  cardType: yup.string(),
  status: yup.string(),
});

export const EmployeesOptionsInitailValues = {
  search: "",
  nationality: "",
  gender: "",
  cardType: "",
  status: "",
};
