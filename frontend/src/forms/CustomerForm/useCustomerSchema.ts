import * as yup from "yup";

import { useContext, useEffect } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useProSchema = () => {
  const { editableCustomerData, setCustomerImage } = useContext(FormsContext);

  const CustomerSchema = yup.object({
    personCode: yup.string(),
    uid: yup.string().required("UID Number is required"),
    avatar: yup.string(),
    name: yup.string().required("English Name is required"),
    nameAr: yup.string().required("Arabic Name is required"),
    dob: yup.string(),
    idNationality: yup.string(),
    nationality: yup.string().required("Nationality is required"),
    phone: yup.string(),
    emiratesId: yup.string(),
    email: yup.string().email("Email is inValid"),
    state: yup.string(),
    address: yup.string(),
    residenceExpiryDate: yup.date(),
    fileImmgNo: yup.string(),
    status: yup.string(),
    remarks: yup.string(),
  });

  const CustomerInitailValues = {
    name: editableCustomerData?.name || "",
    personCode: editableCustomerData?.personCode || "",
    nameAr: editableCustomerData?.nameAr || "",
    avatar: editableCustomerData?.avatar || "",
    dob:
      (editableCustomerData?.dob &&
        new Date(editableCustomerData?.dob).toISOString().split("T")[0]) ||
      "",
    idNationality: editableCustomerData?.idNationality || "",
    nationality: editableCustomerData?.nationality || "",
    phone: editableCustomerData?.phone || "",
    email: editableCustomerData?.email || "",
    state: editableCustomerData?.state || "",
    address: editableCustomerData?.address || "",
    emiratesId: editableCustomerData?.emiratesId || "",
    residenceExpiryDate:
      (editableCustomerData?.residenceExpiryDate &&
        new Date(editableCustomerData?.residenceExpiryDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    fileImmgNo: editableCustomerData?.fileImmgNo || "",
    status: editableCustomerData?.status || "",
    uid: editableCustomerData?.uid || "",
    remarks: editableCustomerData?.remarks || "",
  };

  useEffect(() => {
    if (editableCustomerData && editableCustomerData.avatar) {
      setCustomerImage(editableCustomerData.avatar);
    }
  }, [editableCustomerData, setCustomerImage]);

  return { CustomerSchema, CustomerInitailValues };
};

export default useProSchema;
