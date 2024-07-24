import * as yup from "yup";

const useCreateOwnersSheetSchema = () => {
  const createOwnersSheetSchema = yup.object({});
  const createOwnersSheetInitialValues = {};

  return { createOwnersSheetSchema, createOwnersSheetInitialValues };
};

export default useCreateOwnersSheetSchema;
