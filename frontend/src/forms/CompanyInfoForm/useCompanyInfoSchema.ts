import * as yup from "yup";

const useCompanyInfoSchema = () => {
  const CompanyInfoSchema = yup.object({
    email: yup.string().email("Email is InValid").required("Email is required"),
  });

  const CompanyInfoInitialValues = {
    email: "",
  };

  return { CompanyInfoSchema, CompanyInfoInitialValues };
};

export default useCompanyInfoSchema;
