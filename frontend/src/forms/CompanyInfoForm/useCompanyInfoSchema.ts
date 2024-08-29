import * as yup from "yup";

const useCompanyInfoSchema = () => {
  const CompanyInfoSchema = yup.object({
    logo: yup.string(),
    officialEmail: yup
      .string()
      .email("Email is InValid")
      .required("Official Email is required"),
    companyName: yup.string().required("Company Name is required"),
    mobile: yup.string().required("Mobile Number is required"),
    websiteLink: yup.string().required("Website URL is required"),
  });

  const CompanyInfoInitialValues = {
    logo: "",
    officialEmail: "",
    mobile: "",
    companyName: "",
    websiteLink: "",
  };

  return { CompanyInfoSchema, CompanyInfoInitialValues };
};

export default useCompanyInfoSchema;
