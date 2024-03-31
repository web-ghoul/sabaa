import * as yup from "yup";

import { useContext, useEffect } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useEditOwnerSchema = () => {
  const { editableOwnerData, setEditOwnerImage } = useContext(FormsContext);

  const EditOwnerSchema = yup.object({
    avatar: yup.string(),
    name: yup.string().required("English Name is required"),
    nameAr: yup.string().required("Arabic Name is required"),
    dob: yup.string().required("Date of Birth is required"),
    idNationality: yup.string(),
    nationality: yup.string(),
    phone: yup.string().required("Phone is required"),
    emiratesId: yup.string().required("Emirates Id is required"),
    email: yup.string(),
    state: yup.string(),
    address: yup.string(),
    remarks: yup.string(),
    proCode: yup.boolean(),
  });

  const EditOwnerInitailValues = {
    name: editableOwnerData?.name,
    nameAr: editableOwnerData?.nameAr,
    avatar: editableOwnerData?.avatar,
    dob:
      editableOwnerData?.dob &&
      new Date(editableOwnerData?.dob).toISOString().split("T")[0],
    idNationality: editableOwnerData?.idNationality,
    nationality: `${editableOwnerData?.nationality} ( ${editableOwnerData?.idNationality} )`,
    phone: editableOwnerData?.phone,
    email: editableOwnerData?.email,
    remarks: editableOwnerData?.remarks,
    state: editableOwnerData?.state,
    address: editableOwnerData?.address,
    proCode: editableOwnerData?.proCode,
    emiratesId: editableOwnerData?.emiratesId,
  };

  useEffect(() => {
    if (editableOwnerData && editableOwnerData.avatar) {
      setEditOwnerImage(
        `${import.meta.env.VITE_BACKEND_URL}/${editableOwnerData.avatar}`
      );
    }
  }, [editableOwnerData, setEditOwnerImage]);

  return { EditOwnerSchema, EditOwnerInitailValues };
};

export default useEditOwnerSchema;
