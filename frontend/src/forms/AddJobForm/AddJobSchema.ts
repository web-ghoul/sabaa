import * as yup from "yup";

export const AddJobSchema = yup.object({
  jobTitle: yup.string().required("Job Title is required"),
  ENSCOCode: yup
    .string()
    .required("ENSCO Code is required"),
  _id: yup
    .string()
    .required("MOHRE Code is required"),
});

export const AddJobInitailValues = {
  jobTitle: "",
  ENSCOCode: "",
  _id:""
};
