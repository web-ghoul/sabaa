import * as yup from "yup";

const useLinkToCompanySchema = () => {
  const LinkToCompanySchema = yup.object({
    companyId: yup.array().required("Company is required"),
  });

  const LinkToCompanyInitialValues = {
    companyId: [],
  };

  return { LinkToCompanyInitialValues, LinkToCompanySchema };
};

export default useLinkToCompanySchema;
