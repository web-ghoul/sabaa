import * as yup from "yup";

import { useContext, useEffect } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useSponsorSchema = () => {
  const { editableSponsorData, setSponsorImage } = useContext(FormsContext);

  const SponsorSchema = yup.object({
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

  const SponsorInitailValues = {
    name: editableSponsorData?.name || "",
    nameAr: editableSponsorData?.nameAr || "",
    avatar: editableSponsorData?.avatar || "",
    dob:
      (editableSponsorData?.dob &&
        new Date(editableSponsorData?.dob).toISOString().split("T")[0]) ||
      "",
    idNationality: editableSponsorData?.idNationality || "",
    nationality: editableSponsorData?.nationality || "",
    phone: editableSponsorData?.phone || "",
    email: editableSponsorData?.email || "",
    state: editableSponsorData?.state || "",
    address: editableSponsorData?.address || "",
    emiratesId: editableSponsorData?.emiratesId || "",
    residenceExpiryDate:
      (editableSponsorData?.residenceExpiryDate &&
        new Date(editableSponsorData?.residenceExpiryDate)
          .toISOString()
          .split("T")[0]) ||
      "",
    fileImmgNo: editableSponsorData?.fileImmgNo || "",
    status: editableSponsorData?.status || "",
    uid: editableSponsorData?.uid || "",
    remarks: editableSponsorData?.remarks || "",
  };

  useEffect(() => {
    if (editableSponsorData && editableSponsorData.avatar) {
      setSponsorImage(editableSponsorData.avatar);
    }
  }, [editableSponsorData, setSponsorImage]);

  return { SponsorSchema, SponsorInitailValues };
};

export default useSponsorSchema;
