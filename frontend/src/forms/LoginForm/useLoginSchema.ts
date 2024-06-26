import * as yup from "yup";

const useLoginSchema = () => {
  const LoginSchema = yup.object({
    email: yup.string().email("Email is InValid").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const LoginInitailValues = {
    email: "",
    password: "",
  };

  return { LoginSchema, LoginInitailValues };
};

export default useLoginSchema;
