import * as yup from "yup";

export const AddOwnerSchema = yup.object({
  avatar: yup.string(),
  _id: yup.string().required("UID Number is required"),
  personCode: yup.string().required("Person Code is required"),
  name: yup.string().required("English Name is required"),
  nameAr: yup.string().required("Arabic Name is required"),
  dob: yup.string().required("Date of Birth is required"),
  idNationality: yup.string(),
  nationality: yup.string(),
  phone: yup.string().required("Phone is required"),
  emiratesId: yup.string().required("Emirates Id is required"),
  email: yup.string(),
  state: yup.string(),
  address: yup.string(),
  remarks: yup.string(),
  proCode: yup.boolean(),
});

export const AddOwnerInitailValues = {
  _id: "",
  name: "",
  nameAr: "",
  avatar: "",
  dob: "",
  idNationality: "",
  nationality: "",
  phone: "",
  email: "",
  remarks: "",
  state: "",
  address: "",
  proCode: false,
  emiratesId: "",
  personCode: "",
};
