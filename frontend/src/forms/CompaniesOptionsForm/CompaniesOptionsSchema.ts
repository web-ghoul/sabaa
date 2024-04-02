import * as yup from "yup";

export const CompaniesOptionsSchema = yup.object({
  search: yup.string(),
  limit: yup.string(),
  filterByState: yup.string(),
  filterByStatus: yup.string(),
  filterByMOLCategory: yup.string(),
  filterByEstablishmentType: yup.string(),
  filterByIMMGExpireDate: yup.string(),
  filterByLicenseExpireDate: yup.string(),
});

export const CompaniesOptionsInitailValues = {
  search: "",
  limit: "",
  filterByState: "",
  filterByStatus: "",
  filterByMOLCategory: "",
  filterByEstablishmentType: "",
  filterByIMMGExpireDate: "",
  filterByLicenseExpireDate: "",
};
