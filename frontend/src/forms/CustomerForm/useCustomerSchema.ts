import * as yup from "yup";

import { useContext, useEffect } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useCustomerSchema = () => {
  const { editableCustomerData, setCustomerImage } = useContext(FormsContext);

  const CustomerSchema = yup.object({
    avatar: yup.string(),
    name: yup.string().required("English Name is required"),
    nameAr: yup.string().required("Arabic Name is required"),
    nationality: yup.string().required("Nationality is required"),
    uid: yup.string().required("UID Number is required"),
    gender: yup.string().required("Gender is required"),
    personCode: yup.string(),
    companyCode: yup.string(),
    companyName: yup.string(),
    dob: yup.date(),
    idNationality: yup.string(),
    status: yup.string(),
    email: yup.string(),
    salary: yup.string(),
    mobileNumber: yup.string(),
    cardType: yup.string(),
    job: yup.string(),
    iLOEInsuranceCompany: yup.string(),
    iLOEPolicy: yup.string(),
    iLOEExpireDate: yup.date(),
    medicalInsuranceCompany: yup.string(),
    medicalPolicy: yup.string(),
    medicalExpireDate: yup.date(),
    visaFileNumber: yup.string(),
    emiratesId: yup.string(),
    workPermitNumber: yup.string(),
    passportNumber: yup.string(),
    passportExpiry: yup.date(),
    residenceExpireDate: yup.date(),
    lcExpireDate: yup.date(),
  });

  const CustomerInitailValues = {
    avatar: editableCustomerData?.avatar || "",
    name: editableCustomerData?.name || "",
    nameAr: editableCustomerData?.nameAr || "",
    nationality: editableCustomerData?.nationality || "",
    uid: editableCustomerData?.uid || "",
    gender: editableCustomerData?.gender || "",
    personCode: editableCustomerData?.personCode || "",
    companyCode: editableCustomerData?.companyCode || "",
    companyName: editableCustomerData?.companyName || "",
    dob: yup.date(),
    idNationality: editableCustomerData?.avatar || "",
    status: editableCustomerData?.status || "",
    email: editableCustomerData?.email || "",
    salary: editableCustomerData?.salary || "",
    mobileNumber: editableCustomerData?.mobileNumber || "",
    cardType: editableCustomerData?.cardType || "",
    cardNumber: editableCustomerData?.cardNumber || "",
    job: editableCustomerData?.job || "",
    iLOEInsuranceCompany: editableCustomerData?.iLOEInsuranceCompany || "",
    iLOEPolicy: editableCustomerData?.iLOEPolicy || "",
    iLOEExpireDate:
      (editableCustomerData?.iLOEExpireDate &&
        new Date(editableCustomerData?.iLOEExpireDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    medicalInsuranceCompany:
      editableCustomerData?.medicalInsuranceCompany || "",
    medicalPolicy: editableCustomerData?.medicalPolicy || "",
    medicalExpireDate:
      (editableCustomerData?.medicalExpireDate &&
        new Date(editableCustomerData?.medicalExpireDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    visaFileNumber: editableCustomerData?.visaFileNumber || "",
    emiratesId: editableCustomerData?.emiratesId || "",
    workPermitNumber: editableCustomerData?.workPermitNumber || "",
    passportNumber: editableCustomerData?.passportNumber || "",
    passportExpiry:
      (editableCustomerData?.passportExpiry &&
        new Date(editableCustomerData?.passportExpiry)
          .toISOString()
          .split("T")[0]) ||
      "",
    residenceExpireDate:
      (editableCustomerData?.residenceExpireDate &&
        new Date(editableCustomerData?.residenceExpireDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    lcExpireDate:
      (editableCustomerData?.lcExpireDate &&
        new Date(editableCustomerData?.lcExpireDate)
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
