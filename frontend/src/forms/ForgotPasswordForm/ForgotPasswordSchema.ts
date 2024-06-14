import * as yup from "yup";

export const ForgotPasswordSchema = yup.object({
  email: yup.string().required("Email is required"),
});

export const ForgotPasswordInitailValues = {
  email: "",
};
