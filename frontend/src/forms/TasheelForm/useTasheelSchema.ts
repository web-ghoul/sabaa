import * as yup from "yup";

import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";

const useTasheelSchema = () => {
  const { editableTasheelData } = useContext(FormsContext);

  const TasheelSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    name: yup.string().required("English Name is required"),
    nameAr: yup.string().required("Arabic Name is required"),
    emiratesId: yup.string(),
    personCode: yup.string(),
    security1: yup.string().required("Security 1 is required"),
    security2: yup.string().required("Security 2 is required"),
    email: yup.string(),
    mobile: yup.string(),
    type: yup.string(),
    notes: yup.string(),
  });

  const TasheelInitailValues = {
    username: editableTasheelData?.username || "",
    password: editableTasheelData?.password || "",
    name: editableTasheelData?.name || "",
    nameAr: editableTasheelData?.nameAr || "",
    emiratesId: editableTasheelData?.emiratesId || "",
    personCode: editableTasheelData?.personCode || "",
    security1: editableTasheelData?.security1 || "",
    security2: editableTasheelData?.security2 || "",
    email: editableTasheelData?.email || "",
    mobile: editableTasheelData?.mobile || "",
    notes: editableTasheelData?.notes || "",
    type: editableTasheelData?.type,
  };

  return { TasheelSchema, TasheelInitailValues };
};

export default useTasheelSchema;
