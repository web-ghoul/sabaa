import * as yup from "yup";

export const AddOwnerSchema = yup.object({
<<<<<<< HEAD
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
=======
  _id: yup.string().required("Username is required"),
  name: yup.string().required("Password is required"),
  nameAr: yup.string().required("Password is required"),
  dob: yup.string().required("Password is required"),
  idNationality: yup.string().required("Password is required"),
  phone: yup.string().required("Password is required"),
  emiratesId: yup.string().required("Password is required"),
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
});

export const AddOwnerInitailValues = {
  _id: "",
  name: "",
  nameAr: "",
<<<<<<< HEAD
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
=======
  dob: "",
  idNationality: "",
  phone: "",
  emiratesId: "",
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
};
