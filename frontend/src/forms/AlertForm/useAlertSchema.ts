import * as yup from "yup";

const useAlertSchema = () => {
  const AlertSchema = yup.object({
    passportExpiry: yup.string().required("required"),
    visitExpiryDate: yup.string().required("required"),
    changeStatusDate: yup.string().required("required"),
    tawjeehDate: yup.string().required("required"),
    lcExpiryDate: yup.string().required("required"),
    residenceExpiryDate: yup.string().required("required"),
  });

  const AlertInitialValues = {
    passportExpiry: "",
    visitExpiryDate: "",
    changeStatusDate: "",
    tawjeehDate: "",
    lcExpiryDate: "",
    residenceExpiryDate: "",
  };

  return { AlertSchema, AlertInitialValues };
};

export default useAlertSchema;
