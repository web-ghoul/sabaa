import * as yup from "yup";

export const EditNationalitySchema = yup.object({
  _id: yup.string().required("Nationality Id is required"),
  nationality: yup.string().required("Nationality is required"),
});

export const EditNationalityInitailValues = {
  _id: "",
  nationality: "",
};
