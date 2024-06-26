import * as yup from "yup";

const useLinkToCompanySchema = () => {
  const LinkToCompanySchema = yup.object({
    companyId: yup.array().required("Company is required"),
  });

  const LinkToCompanyInitailValues = {
    companyId: [],
  };

  return { LinkToCompanyInitailValues, LinkToCompanySchema };
};

export default useLinkToCompanySchema;
