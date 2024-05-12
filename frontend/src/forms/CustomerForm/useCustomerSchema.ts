import * as yup from "yup";

import { useContext, useEffect } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useCustomerSchema = () => {
  const { editableCustomerData, setCustomerImage } = useContext(FormsContext);

  const CustomerSchema = yup.object({
    avatar: yup.string(),
    name: yup.string().required("English Name is required"),
    nameAr: yup.string().required("Arabic Name is required"),
    personCode: yup.string(),
    companyCode: yup.string(),
    dob: yup.string(),
    idNationality: yup.string(),
    nationality: yup.string().required("Nationality is required"),
    gender: yup.string(),
    emiratesId: yup.string(),
    uid: yup.string().required("UID Number is required"),
    passportNumber: yup.string(),
    passportExpiry: yup.string(),
  });

  const CustomerInitailValues = {
    avatar: editableCustomerData?.avatar || "",
    name: editableCustomerData?.name || "",
    nameAr: editableCustomerData?.nameAr || "",
    personCode: editableCustomerData?.personCode || "",
    dob:
      (editableCustomerData?.dob &&
        new Date(editableCustomerData?.dob).toISOString().split("T")[0]) ||
      "",
    idNationality: editableCustomerData?.idNationality || "",
    nationality: editableCustomerData?.nationality || "",
    companyCode: editableCustomerData?.companyCode || "",
    emiratesId: editableCustomerData?.emiratesId || "",
    uid: editableCustomerData?.uid || "",
    passportNumber: editableCustomerData?.passportNumber || "",
    passportExpiry:
      (editableCustomerData?.passportExpiry &&
        new Date(editableCustomerData?.passportExpiry)
          .toISOString()
          .split("T")[0]) ||
      "",
  };

  useEffect(() => {
    if (editableCustomerData && editableCustomerData.avatar) {
      setCustomerImage(editableCustomerData.avatar);
    }
  }, [editableCustomerData, setCustomerImage]);

  return { CustomerSchema, CustomerInitailValues };
};

export default useCustomerSchema;
