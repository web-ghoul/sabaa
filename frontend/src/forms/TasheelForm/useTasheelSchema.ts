import * as yup from "yup";

import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";
import { OwnerTypes } from "../../types/store.types";

const useTasheelSchema = () => {
  const { editableTasheelData } = useContext(FormsContext);

  const TasheelSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    name: yup.string(),
    security1: yup.string(),
    security2: yup.string(),
    email: yup.string(),
    mobile: yup.string(),
    type: yup.string(),
    notes: yup.string(),
  });

  const TasheelInitailValues = {
    username: editableTasheelData?.username || "",
    password: editableTasheelData?.password || "",
    name: editableTasheelData?.name || "",
    security1: editableTasheelData?.security1 || "",
    security2: editableTasheelData?.security2 || "",
    email: editableTasheelData?.email || "",
    mobile: editableTasheelData?.mobile || "",
    notes: editableTasheelData?.notes || "",
    type: (editableTasheelData?.owner as OwnerTypes)?.type || "",
  };

  return { TasheelSchema, TasheelInitailValues };
};

export default useTasheelSchema;
