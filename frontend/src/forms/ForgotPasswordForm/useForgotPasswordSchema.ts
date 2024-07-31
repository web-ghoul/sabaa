import * as yup from "yup";

const useForgotPasswordSchema = () => {
  const ForgotPasswordSchema = yup.object({
    email: yup.string().required("Email is required"),
  });

  const ForgotPasswordInitialValues = {
    email: "",
  };

  return { ForgotPasswordInitialValues, ForgotPasswordSchema };
};

export default useForgotPasswordSchema;
