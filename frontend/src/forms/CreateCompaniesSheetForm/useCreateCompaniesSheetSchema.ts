import * as yup from "yup";

const useCreateCompaniesSheetSchema = () => {
  const createCompaniesSheetSchema = yup.object({});
  const createCompaniesSheetInitialValues = {};

  return { createCompaniesSheetSchema, createCompaniesSheetInitialValues };
};

export default useCreateCompaniesSheetSchema;
