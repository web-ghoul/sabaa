import * as yup from "yup";

export const EditJobSchema = yup.object({
  jobTitle: yup.string().required("Job Title is required"),
  ENSCOCode: yup.string().required("ENSCO Code is required"),
  _id: yup.string().required("MOHRE Code is required"),
});

export const EditJobInitailValues = {
  jobTitle: "",
  ENSCOCode: "",
  _id: "",
};
