import * as yup from "yup";

const useCreateEmployeesSheetSchema = () => {
  const createEmployeesSheetSchema = yup.object({});
  const createEmployeesSheetInitialValues = {};
  return { createEmployeesSheetSchema, createEmployeesSheetInitialValues };
};

export default useCreateEmployeesSheetSchema;
