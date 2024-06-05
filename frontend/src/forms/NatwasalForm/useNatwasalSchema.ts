import * as yup from "yup";

import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";
import { OwnerTypes } from "../../types/store.types";

const useNatwasalSchema = () => {
  const { editableNatwasalData } = useContext(FormsContext);

  const NatwasalSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    name: yup.string(),
    nameAr: yup.string(),
    personCode: yup.string(),
    security1: yup.string(),
    security2: yup.string(),
    email: yup.string(),
    mobile: yup.string(),
    type: yup.string(),
    notes: yup.string(),
  });

  const NatwasalInitailValues = {
    username: editableNatwasalData?.username || "",
    password: editableNatwasalData?.password || "",
    name: editableNatwasalData?.name || "",
    nameAr: editableNatwasalData?.nameAr || "",
    personCode: editableNatwasalData?.personCode || "",
    security1: editableNatwasalData?.security1 || "",
    security2: editableNatwasalData?.security2 || "",
    email: editableNatwasalData?.email || "",
    mobile: editableNatwasalData?.mobile || "",
    notes: editableNatwasalData?.notes || "",
    type: (editableNatwasalData?.owner as OwnerTypes)?.type || "",
  };

  return { NatwasalSchema, NatwasalInitailValues };
};

export default useNatwasalSchema;
