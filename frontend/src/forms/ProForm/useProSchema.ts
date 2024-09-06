import * as yup from "yup";

import { useContext, useEffect } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useProSchema = () => {
  const { editableProData, setProImage } = useContext(FormsContext);

  const ProSchema = yup.object({
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
    gender: yup.string(),
    job: yup.string(),
    address: yup.string(),
    residenceExpiryDate: yup.string(),
    fileImmgNo: yup.string(),
    status: yup.string(),
    sponsor: yup.string(),
    type: yup.string(),
    remarks: yup.string(),
    iLOEInsuranceCompany: yup.string(),
    iLOEPolicyNo: yup.string(),
    iLOEExpireDate: yup.string(),
    medicalInsuranceCompany: yup.string(),
    medicalPolicyNo: yup.string(),
    medicalExpireDate: yup.string(),
  });

  const ProInitialValues = {
    name: editableProData?.name || "",
    personCode: editableProData?.personCode || "",
    nameAr: editableProData?.nameAr || "",
    avatar: editableProData?.avatar || "",
    dob:
      (editableProData?.dob &&
        new Date(editableProData?.dob).toISOString().split("T")[0]) ||
      "",
    idNationality: editableProData?.idNationality || "",
    nationality: editableProData?.nationality || "",
    phone: editableProData?.phone || "",
    email: editableProData?.email || "",
    state: editableProData?.state || "",
    address: editableProData?.address || "",
    residenceExpiryDate:
      (editableProData?.residenceExpiryDate &&
        new Date(editableProData?.residenceExpiryDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    fileImmgNo: editableProData?.fileImmgNo || "",
    status: editableProData?.status || "",
    gender: editableProData?.gender || "",
    job: editableProData?.job || "",
    emiratesId: editableProData?.emiratesId || "",
    uid: editableProData?.uid || "",
    sponsor: editableProData?.sponsor || "",
    type: "pro",
    remarks: editableProData?.remarks || "",
    iLOEInsuranceCompany: editableProData?.iLOE?.insurance || "",
    iLOEPolicyNo: editableProData?.iLOEPolicyNo || "",
    iLOEExpireDate:
      (editableProData?.iLOE?.expireDate &&
        new Date(editableProData?.iLOE?.expireDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    medicalInsuranceCompany: editableProData?.medical?.insurance || "",
    medicalPolicyNo: editableProData?.medicalPolicyNo || "",
    medicalExpireDate:
      (editableProData?.medical?.expireDate &&
        new Date(editableProData?.medical?.expireDate)
          .toISOString()
          .split("T")[0]) ||
      "",
  };

  useEffect(() => {
    if (editableProData && editableProData.avatar) {
      setProImage(editableProData.avatar);
    }
  }, [editableProData, setProImage]);

  return { ProSchema, ProInitialValues };
};

export default useProSchema;
