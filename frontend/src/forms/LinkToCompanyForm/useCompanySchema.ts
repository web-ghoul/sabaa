import * as yup from "yup";

const useLinkToCompanySchema = () => {
  const LinkToCompanySchema = yup.object({
    companyId: yup.string().required("Company is required"),
  });

  const LinkToCompanyInitailValues = {
    companyId: "",
  };

  return { LinkToCompanyInitailValues, LinkToCompanySchema };
};

export default useLinkToCompanySchema;
