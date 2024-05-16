import * as yup from "yup";

export const CompaniesOptionsSchema = yup.object({
  search: yup.string(),
  state: yup.string(),
  status: yup.string(),
  molCategory: yup.string(),
  establishmentType: yup.string(),
  IMMGFrom: yup.string(),
  IMMGTo: yup.string(),
  licenseFrom: yup.string(),
  licenseTo: yup.string(),
});

export const CompaniesOptionsInitailValues = {
  search: "",
  state: "",
  status: "",
  molCategory: "",
  establishmentType: "",
  IMMGFrom: "",
  IMMGTo: "",
  licenseFrom: "",
  licenseTo: "",
};
