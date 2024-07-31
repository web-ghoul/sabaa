import * as yup from "yup";

const useCreateNationalitiesSheetSchema = () => {
  const createNationalitiesSheetSchema = yup.object({});

  const createNationalitiesSheetInitialValues = {};

  return {
    createNationalitiesSheetSchema,
    createNationalitiesSheetInitialValues,
  };
};

export default useCreateNationalitiesSheetSchema;
