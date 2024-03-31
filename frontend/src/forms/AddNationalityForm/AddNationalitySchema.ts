import * as yup from "yup";

export const AddNationalitySchema = yup.object({
  _id: yup.string().required("Nationality Id is required"),
  nationality: yup.string().required("Nationality is required"),
});

export const AddNationalityInitailValues = {
  _id: "",
  nationality: "",
};
