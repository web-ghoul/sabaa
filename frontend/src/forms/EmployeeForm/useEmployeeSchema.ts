import * as yup from "yup";

import { useContext, useEffect } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useEmployeeSchema = () => {
  const { editableEmployeeData, setEmployeeImage } = useContext(FormsContext);

  const EmployeeSchema = yup.object({
    avatar: yup.string(),
    name: yup.string().required("English Name is required"),
    nameAr: yup.string().required("Arabic Name is required"),
    nationality: yup.string().required("Nationality is required"),
    uid: yup.string().required("UID Number is required"),
    gender: yup.string().required("Gender is required"),
    personCode: yup.string(),
    companyId: yup.string(),
    companyName: yup.string(),
    dob: yup.date(),
    idNationality: yup.string(),
    status: yup.string(),
    email: yup.string(),
    salary: yup.string(),
    mobileNumber: yup.string(),
    cardType: yup.string(),
    job: yup.string(),
    remarks: yup.string(),
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

  const EmployeeInitailValues = {
    avatar: editableEmployeeData?.avatar || "",
    name: editableEmployeeData?.name || "",
    nameAr: editableEmployeeData?.nameAr || "",
    nationality: editableEmployeeData?.nationality || "",
    uid: editableEmployeeData?.uid || "",
    gender: editableEmployeeData?.gender || "",
    personCode: editableEmployeeData?.personCode || "",
    companyId: editableEmployeeData?.companyId || "",
    companyName: editableEmployeeData?.companyName || "",
    dob:
      (editableEmployeeData?.dob &&
        new Date(editableEmployeeData?.dob).toISOString().split("T")[0]) ||
      "",
    idNationality: editableEmployeeData?.avatar || "",
    status: editableEmployeeData?.status || "",
    email: editableEmployeeData?.email || "",
    salary: editableEmployeeData?.salary || "",
    mobileNumber: editableEmployeeData?.mobileNumber || "",
    cardType: editableEmployeeData?.cardType || "",
    cardNumber: editableEmployeeData?.cardNumber || "",
    job: editableEmployeeData?.job || "",
    remarks: editableEmployeeData?.remarks || "",
    iLOEInsuranceCompany: editableEmployeeData?.iLOEInsuranceCompany || "",
    iLOEPolicy: editableEmployeeData?.iLOEPolicy || "",
    iLOEExpireDate:
      (editableEmployeeData?.iLOEExpireDate &&
        new Date(editableEmployeeData?.iLOEExpireDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    medicalInsuranceCompany:
      editableEmployeeData?.medicalInsuranceCompany || "",
    medicalPolicy: editableEmployeeData?.medicalPolicy || "",
    medicalExpireDate:
      (editableEmployeeData?.medicalExpireDate &&
        new Date(editableEmployeeData?.medicalExpireDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    visaFileNumber: editableEmployeeData?.visaFileNumber || "",
    emiratesId: editableEmployeeData?.emiratesId || "",
    workPermitNumber: editableEmployeeData?.workPermitNumber || "",
    passportNumber: editableEmployeeData?.passportNumber || "",
    passportExpiry:
      (editableEmployeeData?.passportExpiry &&
        new Date(editableEmployeeData?.passportExpiry)
          .toISOString()
          .split("T")[0]) ||
      "",
    residenceExpireDate:
      (editableEmployeeData?.residenceExpireDate &&
        new Date(editableEmployeeData?.residenceExpireDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    lcExpireDate:
      (editableEmployeeData?.lcExpireDate &&
        new Date(editableEmployeeData?.lcExpireDate)
          .toISOString()
          .split("T")[0]) ||
      "",
  };

  useEffect(() => {
    if (editableEmployeeData && editableEmployeeData.avatar) {
      setEmployeeImage(editableEmployeeData.avatar);
    }
  }, [editableEmployeeData, setEmployeeImage]);

  return { EmployeeSchema, EmployeeInitailValues };
};

export default useEmployeeSchema;
