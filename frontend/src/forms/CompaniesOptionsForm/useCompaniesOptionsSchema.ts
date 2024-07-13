import * as yup from "yup";
import useQueries from "../../hooks/useQueries";

const useCompaniesOptionsSchema = () => {
  const { handleGetQueries } = useQueries();

  const allParams: { [key: string]: string } = handleGetQueries();

  const CompaniesOptionsSchema = yup.object({
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

  const CompaniesOptionsInitialValues = {
    search: "",
    state: allParams.state || "",
    status: allParams.status || "",
    molCategory: allParams.molCategory || "",
    establishmentType: allParams.establishmentType || "",
    IMMGFrom: allParams.IMMGFrom || "",
    IMMGTo: allParams.IMMGTo || "",
    licenseFrom: allParams.licenseFrom || "",
    licenseTo: allParams.licenseTo || "",
  };

  return { CompaniesOptionsSchema, CompaniesOptionsInitialValues };
};

export default useCompaniesOptionsSchema;
