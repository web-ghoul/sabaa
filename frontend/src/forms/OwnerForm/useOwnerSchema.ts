import * as yup from "yup";

import { useContext, useEffect } from "react";
import { FormsContext } from "../../contexts/FormsContext";
import { isAdult } from "../../functions/handleIsAdult";

const useOwnerSchema = () => {
  const { editableOwnerData, setOwnerImage } = useContext(FormsContext);

  const OwnerSchema = yup.object({
    personCode: yup.string(),
    uid: yup.string().required("UID Number is required"),
    avatar: yup.string(),
    name: yup.string().required("English Name is required"),
    nameAr: yup.string().required("Arabic Name is required"),
    dob: yup
      .date()
      .test(
        "is-adult",
        "You must be at least 18 years old",
        (value) => value && isAdult(value)
      )
      .required("Date of Birth is required"),
    idNationality: yup.string(),
    nationality: yup.string().required("Nationality is required"),
    phone: yup.string(),
    emiratesId: yup.string(),
    email: yup.string().email("Email is inValid"),
    state: yup.string(),
    address: yup.string(),
    residenceExpiryDate: yup.string(),
    fileImmgNo: yup.string(),
    status: yup.string(),
    gender: yup.string(),
    job: yup.string(),
    type: yup.string(),
    sponsor: yup.string(),
    remarks: yup.string(),
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
    state: editableOwnerData?.state || "",
    address: editableOwnerData?.address || "",
    gender: editableOwnerData?.gender || "",
    job: editableOwnerData?.job || "",
    residenceExpiryDate:
      (editableOwnerData?.residenceExpiryDate &&
        new Date(editableOwnerData?.residenceExpiryDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    fileImmgNo: editableOwnerData?.fileImmgNo || "",
    status: editableOwnerData?.status || "",
    emiratesId: editableOwnerData?.emiratesId || "",
    uid: editableOwnerData?.uid || "",
    sponsor: editableOwnerData?.sponsor || "",
    type: "owner",
    remarks: editableOwnerData?.remarks || "",
  };

  useEffect(() => {
    if (editableOwnerData && editableOwnerData.avatar) {
      setOwnerImage(editableOwnerData.avatar);
    }
  }, [editableOwnerData, setOwnerImage]);

  return { OwnerSchema, OwnerInitailValues };
};

export default useOwnerSchema;
