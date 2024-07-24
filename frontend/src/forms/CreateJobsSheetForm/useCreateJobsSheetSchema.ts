import * as yup from "yup";

const useCreateJobsSheetSchema = () => {
  const createJobsSheetSchema = yup.object({});

  const createJobsSheetInitialValues = {};

  return { createJobsSheetSchema, createJobsSheetInitialValues };
};

export default useCreateJobsSheetSchema;
