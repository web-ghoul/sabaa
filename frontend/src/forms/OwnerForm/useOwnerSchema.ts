import * as yup from "yup";

import { useContext, useEffect } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useOwnerSchema = () => {
  const { editableOwnerData, setOwnerImage } = useContext(FormsContext);

  const OwnerSchema = yup.object({
    personCode: yup.string().required("Person Code is required"),
    avatar: yup.string(),
    name: yup.string().required("English Name is required"),
    nameAr: yup.string().required("Arabic Name is required"),
    dob: yup.string().required("Date of Birth is required"),
    idNationality: yup.string(),
    nationality: yup.string(),
    phone: yup.string().required("Phone is required"),
    emiratesId: yup.string().required("Emirates Id is required"),
    email: yup.string().email("Email is inValid"),
    state: yup.string(),
    address: yup.string(),
    remarks: yup.string(),
    proCode: yup.boolean(),
    _id: yup.string().required("UID Number is required"),
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
    proCode: editableOwnerData?.proCode || "",
    emiratesId: editableOwnerData?.emiratesId || "",
    _id: editableOwnerData?._id || "",
  };

  useEffect(() => {
    if (editableOwnerData && editableOwnerData.avatar) {
      setOwnerImage(editableOwnerData.avatar);
    }
  }, [editableOwnerData, setOwnerImage]);

  return { OwnerSchema, OwnerInitailValues };
};

export default useOwnerSchema;
