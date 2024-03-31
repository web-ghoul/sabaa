import * as yup from "yup";

export const AddUserSchema = yup.object({
  name: yup.string().required("Username is required"),
  email: yup.string().required("Email is required"),
  role: yup.string().required("Role is required"),
  phone: yup.string().required("Phone is required"),
  status: yup.string().required("Status is required"),
  password: yup.string().required("Password is required"),
});

export const AddUserInitailValues = {
  name: "",
  email: "",
  role: "",
  phone: "",
  avatar: "",
  status: "",
  password: "",
};
