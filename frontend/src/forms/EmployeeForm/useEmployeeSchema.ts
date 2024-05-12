import * as yup from "yup";

import { useContext, useEffect } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useEmployeeSchema = () => {
  const { editableEmployeeData, setEmployeeImage } = useContext(FormsContext);

  const EmployeeSchema = yup.object({
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

  const EmployeeInitailValues = {
    avatar: editableEmployeeData?.avatar || "",
    name: editableEmployeeData?.name || "",
    nameAr: editableEmployeeData?.nameAr || "",
    personCode: editableEmployeeData?.personCode || "",
    dob:
      (editableEmployeeData?.dob &&
        new Date(editableEmployeeData?.dob).toISOString().split("T")[0]) ||
      "",
    idNationality: editableEmployeeData?.idNationality || "",
    nationality: editableEmployeeData?.nationality || "",
    companyCode: editableEmployeeData?.companyCode || "",
    emiratesId: editableEmployeeData?.emiratesId || "",
    uid: editableEmployeeData?.uid || "",
    passportNumber: editableEmployeeData?.passportNumber || "",
    passportExpiry:
      (editableEmployeeData?.passportExpiry &&
        new Date(editableEmployeeData?.passportExpiry)
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
