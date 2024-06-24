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
    nationality: yup.string().required("Nationality is required"),
    email: yup.string().email("Email is inValid"),
    dob: yup.string(),
    idNationality: yup.string(),
    phone: yup.string(),
    job: yup.string(),
    emiratesId: yup.string(),
    state: yup.string(),
    address: yup.string(),
    gender: yup.string(),
    relativeRelation: yup.string().required("Relative Relation is required"),
    residenceExpiryDate: yup.string(),
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
    gender: editableSponsorData?.gender || "",
    job: editableSponsorData?.job || "",
    state: editableSponsorData?.state || "",
    address: editableSponsorData?.address || "",
    relativeRelation: editableSponsorData?.relativeRelation || "",
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
