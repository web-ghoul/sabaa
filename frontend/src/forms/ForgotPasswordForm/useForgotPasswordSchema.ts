import * as yup from "yup";

const useForgotPasswordSchema = () => {
  const ForgotPasswordSchema = yup.object({
    email: yup.string().required("Email is required"),
  });

  const ForgotPasswordInitailValues = {
    email: "",
  };

  return { ForgotPasswordInitailValues, ForgotPasswordSchema };
};

export default useForgotPasswordSchema;
