import * as yup from "yup";

import { useContext, useEffect } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useUserSchema = () => {
  const { editableUserData, setUserImage } = useContext(FormsContext);

  const UserSchema = yup.object({
    name: yup.string().required("Username is required"),
    email: yup.string().required("Email is required").email("Email is inValid"),
    role: yup.string().required("Role is required"),
    phone: yup.string().required("Phone is required"),
    avatar: yup.string(),
    status: yup.string().required("Status is required"),
    password: editableUserData
      ? yup.string()
      : yup
          .string()
          .min(8, "Password must be 8 characters or more")
          .required("Password is required"),
  });

  const UserInitailValues = {
    name: editableUserData?.name || "",
    email: editableUserData?.email || "",
    role: editableUserData?.role || "",
    phone: editableUserData?.phone || "",
    avatar: editableUserData?.avatar || "",
    status: editableUserData?.status || "",
    password: editableUserData?.password || "",
  };

  useEffect(() => {
    if (editableUserData) {
      setUserImage(editableUserData.avatar);
    }
  }, [editableUserData, setUserImage]);

  return { UserSchema, UserInitailValues };
};

export default useUserSchema;
