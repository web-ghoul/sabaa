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
    address: yup.string(),
    remarks: yup.string(),
    proCode: yup.boolean(),
  });

  const ProInitailValues = {
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
    remarks: editableProData?.remarks || "",
    state: editableProData?.state || "",
    address: editableProData?.address || "",
    proCode: editableProData?.proCode || "",
    emiratesId: editableProData?.emiratesId || "",
    uid: editableProData?.uid || "",
  };

  useEffect(() => {
    if (editableProData && editableProData.avatar) {
      setProImage(editableProData.avatar);
    }
  }, [editableProData, setProImage]);

  return { ProSchema, ProInitailValues };
};

export default useProSchema;
