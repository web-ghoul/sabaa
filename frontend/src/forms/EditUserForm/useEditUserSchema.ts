import * as yup from "yup";

import { useContext, useEffect } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useEditUserSchema = () => {
  const { editableUserData, setEditUserImage } = useContext(FormsContext);

  const EditUserSchema = yup.object({
    name: yup.string().required("Username is required"),
    email: yup.string().required("Email is required"),
    role: yup.string().required("Role is required"),
    phone: yup.string().required("Phone is required"),
    avatar: yup.string(),
    status: yup.string().required("Status is required"),
  });

  const EditUserInitailValues = {
    name: editableUserData?.name,
    email: editableUserData?.email,
    role: editableUserData?.role,
    phone: editableUserData?.phone,
    avatar: editableUserData?.avatar,
    status: editableUserData?.status,
  };

  useEffect(() => {
    if (editableUserData) {
      setEditUserImage(editableUserData.avatar);
    }
  }, [editableUserData, setEditUserImage]);

  return { EditUserSchema, EditUserInitailValues };
};

export default useEditUserSchema;
