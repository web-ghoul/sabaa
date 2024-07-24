import * as yup from "yup";

const useCreateProsSheetSchema = () => {
  const createProsSheetSchema = yup.object({});
  const createProsSheetInitialValues = {};
  return { createProsSheetSchema, createProsSheetInitialValues };
};

export default useCreateProsSheetSchema;
