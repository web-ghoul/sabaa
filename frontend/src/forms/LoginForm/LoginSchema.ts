import * as yup from "yup";

export const LoginSchema = yup.object({
<<<<<<< HEAD
  email: yup.string().email("Email is InValid").required("Email is required"),
=======
  username: yup.string().required("Username is required"),
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export const LoginInitailValues = {
<<<<<<< HEAD
  email: "",
=======
  username: "",
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  password: "",
};
