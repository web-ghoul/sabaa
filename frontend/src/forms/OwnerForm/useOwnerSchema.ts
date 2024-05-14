import * as yup from "yup";

import { useContext, useEffect } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useOwnerSchema = () => {
  const { editableOwnerData, setOwnerImage } = useContext(FormsContext);

  const OwnerSchema = yup.object({
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
    proCode: yup.boolean(),
  });

  const OwnerInitailValues = {
    name: editableOwnerData?.name || "",
    personCode: editableOwnerData?.personCode || "",
    nameAr: editableOwnerData?.nameAr || "",
    avatar: editableOwnerData?.avatar || "",
    dob:
      (editableOwnerData?.dob &&
        new Date(editableOwnerData?.dob).toISOString().split("T")[0]) ||
      "",
    idNationality: editableOwnerData?.idNationality || "",
    nationality: editableOwnerData?.nationality || "",
    phone: editableOwnerData?.phone || "",
    email: editableOwnerData?.email || "",
    remarks: editableOwnerData?.remarks || "",
    state: editableOwnerData?.state || "",
    address: editableOwnerData?.address || "",
    residenceExpiryDate:
      (editableOwnerData?.residenceExpiryDate &&
        new Date(editableOwnerData?.residenceExpiryDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    fileImmgNo: editableOwnerData?.fileImmgNo || "",
    status: editableOwnerData?.status || "",
    proCode: editableOwnerData?.proCode || "",
    emiratesId: editableOwnerData?.emiratesId || "",
    uid: editableOwnerData?.uid || "",
  };

  useEffect(() => {
    if (editableOwnerData && editableOwnerData.avatar) {
      setOwnerImage(editableOwnerData.avatar);
    }
  }, [editableOwnerData, setOwnerImage]);

  return { OwnerSchema, OwnerInitailValues };
};

export default useOwnerSchema;
