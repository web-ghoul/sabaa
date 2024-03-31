import * as yup from "yup";

export const ResetPasswordSchema = yup.object({
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .min(8, "Confirm Password should be of minimum 8 characters length")
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const ResetPasswordInitailValues = {
  password: "",
  confirmPassword: "",
};
