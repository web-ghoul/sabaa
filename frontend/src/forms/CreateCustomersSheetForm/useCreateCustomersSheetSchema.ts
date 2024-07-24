import * as yup from "yup";

const useCreateCustomersSheetSchema = () => {
  const createCustomersSheetSchema = yup.object({});
  const createCustomersSheetInitialValues = {};
  return { createCustomersSheetSchema, createCustomersSheetInitialValues };
};

export default useCreateCustomersSheetSchema;
